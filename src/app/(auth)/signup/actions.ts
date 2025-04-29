"use server";

import { lucia } from "@/auth";
import prisma from "@/lib/prisma";
import { signUpSchema, SignUpValues } from "@/lib/validation";
import { hash } from "@node-rs/argon2";
import { generateIdFromEntropySize } from "lucia";
import { cookies } from "next/headers";


export async function signUp(
    credentials: SignUpValues,
): Promise<{ error?: string, success?: boolean }> {
    try {
        const { username, email, password } = signUpSchema.parse(credentials);
        
        const passwordHash = await hash(password, {
            memoryCost: 19456,
            timeCost: 2,
            outputLen: 32,
            parallelism: 1,
        });
        
        const userId = generateIdFromEntropySize(10);
        
        const existingUsername = await prisma.user.findFirst({
            where: {
                username: {
                    equals: username,
                    mode: "insensitive",
                },
            },
        });
        
        if (existingUsername) {
            return {
                error: "Username already taken",
            };
        }
        
        const existingEmail = await prisma.user.findFirst({
            where: {
                email: {
                    equals: email,
                    mode: "insensitive",
                },
            },
        });
        
        if (existingEmail) {
            return {
                error: "Email already taken",
            };
        }
            
        await prisma.user.create({
            data: {
                id: userId,
                username,
                displayName: username,
                email,
                passwordHash,
            },
        });
        
        const session = await lucia.createSession(userId, {});
        const cookieStore = await cookies();
        const sessionCookie = lucia.createSessionCookie(session.id);
        cookieStore.set(
            sessionCookie.name,
            sessionCookie.value,
            sessionCookie.attributes,
        );
        
        return { success: true };
    } catch (error) {
        console.error(error);
        return {
            error: "Something went wrong. Please try again.",
        };
    }
}