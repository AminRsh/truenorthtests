import { google } from "@/auth";
import { generateCodeVerifier, generateState } from "arctic";
import { cookies } from "next/headers";

// Windsurf: Refactor | Explain | Generate JSDoc | X
export async function GET() {
    const state = generateState();
    const codeVerifier = generateCodeVerifier();

    const url = await google.createAuthorizationURL(state, codeVerifier, ["profile", "email"]);

    const cookieStore = await cookies(); 

    cookieStore.set("state", state, {
        path: "/",
        secure: process.env.NODE_ENV === "production",
        httpOnly: true,
        maxAge: 60 * 10, // 10 minutes
        sameSite: "lax",
    });

    cookieStore.set("code_verifier", codeVerifier, {
        path: "/",
        secure: process.env.NODE_ENV === "production",
        httpOnly: true,
        maxAge: 60 * 10, // 10 minutes
        sameSite: "lax",
    });

    return Response.redirect(url);
}