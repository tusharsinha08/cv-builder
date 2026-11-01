import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const registerSchema = z.object({
    name: z.string().trim().min(2).max(50),
    email: z.string().trim().email(),
    password: z
        .string()
        .min(8)
        .regex(/[A-Z]/)
        .regex(/[a-z]/)
        .regex(/\d/),
});

export async function POST(request) {
    let body;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json(
            { message: "Invalid request." },
            { status: 400 }
        );
    }

    const parsed = registerSchema.safeParse(body);
    if (!parsed.success) {
        return NextResponse.json(
            { message: "Please check your name, email and password." },
            { status: 400 }
        );
    }

    const { name, password } = parsed.data;
    const email = parsed.data.email.toLowerCase();

    try {
        const existing = await prisma.user.findUnique({ where: { email } });
        if (existing) {
            return NextResponse.json(
                { message: "This email is already registered." },
                { status: 409 }
            );
        }

        const passwordHash = await bcrypt.hash(password, 12);

        await prisma.user.create({
            data: { name, email, passwordHash },
        });

        return NextResponse.json(
            { message: "Account created successfully!" },
            { status: 201 }
        );
    } catch (error) {
        // P2002 = unique constraint (two requests registered the same email at once)
        if (error?.code === "P2002") {
            return NextResponse.json(
                { message: "This email is already registered." },
                { status: 409 }
            );
        }
        console.error("Register error:", error);
        return NextResponse.json(
            { message: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}