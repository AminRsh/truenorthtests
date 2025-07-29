import { google, lucia } from "@/auth";
import kyInstance from "@/lib/ky";
import prisma from "@/lib/prisma";
import { slugify } from "@/lib/utils";
import { OAuth2RequestError } from "arctic";
import { generateIdFromEntropySize } from "lucia";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const code = req.nextUrl.searchParams.get("code");
    const state = req.nextUrl.searchParams.get("state");

    const cookieStore = await cookies();

    const storedState = cookieStore.get("state")?.value;
    const storedCodeVerifier = cookieStore.get("code_verifier")?.value;

    if (
        !code ||
        !state ||
        !storedState ||
        !storedCodeVerifier ||
        state !== storedState
    ) {
        return new Response(null, { status: 400 });
    }

    try {
        const tokens = await google.validateAuthorizationCode(
            code,
            storedCodeVerifier,
        );

        // IMPORTANT: Call accessToken() as a method, not a property
        const accessToken = tokens.accessToken();

        const googleUser = await kyInstance
            .get("https://www.googleapis.com/oauth2/v1/userinfo", {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            .json<{ id: string; name: string; email: string }>();

        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [
                    { googleId: googleUser.id },
                    { email: googleUser.email }
                ]
            },
        });

        if (existingUser) {
            // If user exists but doesn't have googleId, update it
            if (!existingUser.googleId) {
                await prisma.user.update({
                    where: { id: existingUser.id },
                    data: { googleId: googleUser.id }
                });
            }
            
            const session = await lucia.createSession(existingUser.id, {});
            const sessionCookie = lucia.createSessionCookie(session.id);
            cookieStore.set(
                sessionCookie.name,
                sessionCookie.value,
                sessionCookie.attributes,
            );
            return new Response(null, {
                status: 302,
                headers: {
                    Location: "/",
                },
            });
        }

        const userId = generateIdFromEntropySize(10);

        const username = slugify(googleUser.name) + "-" + userId.slice(0, 4);

        await prisma.user.create({
            data: {
                id: userId,
                username,
                displayName: googleUser.name,
                googleId: googleUser.id,
                email: googleUser.email,
            },
        });

        const session = await lucia.createSession(userId, {});
        const sessionCookie = lucia.createSessionCookie(session.id);
        cookieStore.set(
            sessionCookie.name,
            sessionCookie.value,
            sessionCookie.attributes,
        );

        return new Response(null, {
            status: 302,
            headers: {
                Location: "/",
            },
        });
    } catch (error) {
        console.error(error);
        if (error instanceof OAuth2RequestError) {
            return new Response(null, {
                status: 400,
            });
        }
        return new Response(null, {
            status: 500,
        });
    }
}