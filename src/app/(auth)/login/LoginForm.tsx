"use client";

import LoadingButton from "@/components/LoadingButton";
import { PasswordInput } from "@/components/PasswordInput";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema, LoginValues } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { login } from "./actions";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const [error, setError] = useState<string>();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const form = useForm<LoginValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    async function onSubmit(values: LoginValues) {
        setError(undefined);
        startTransition(async () => {
            const result = await login(values);
            if (result.error) {
                setError(result.error);
            } else if (result.success) {
                router.push("/G1");
            }
        });
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-3">
                {error && <p className="text-center text-destructive">{error}</p>}
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="Username" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <PasswordInput placeholder="Password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <LoadingButton loading={isPending} type="submit" className="w-full" style={{ backgroundColor: 'rgb(25 128 230)', color: 'white' }}>
                    Log in
                </LoadingButton>
            </form>
        </Form>
    );
}