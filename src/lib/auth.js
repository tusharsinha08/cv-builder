import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1),
});

export const authOptions = {
    session: { strategy: "jwt", maxAge: 7 * 24 * 60 * 60 },
    pages: { signIn: "/sign-in" },
    secret: process.env.NEXTAUTH_SECRET,

    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const parsed = loginSchema.safeParse(credentials);
                if (!parsed.success) return null;

                const user = await prisma.user.findUnique({
                    where: { email: parsed.data.email.toLowerCase() },
                });
                if (!user) return null;

                const valid = await bcrypt.compare(
                    parsed.data.password,
                    user.passwordHash
                );
                if (!valid) return null;

                return { id: user.id, name: user.name, email: user.email };
            },
        }),
    ],

    callbacks: {
        async jwt({ token, user }) {
            if (user) token.id = user.id;
            return token;
        },
        async session({ session, token }) {
            if (session.user && token.id) session.user.id = token.id;
            return session;
        },
    },
};