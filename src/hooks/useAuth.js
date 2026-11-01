"use client";

import { useSession, signOut } from "next-auth/react";

export function useAuth() {
    const { data: session, status, update } = useSession();

    const user = session?.user ?? null;

    return {
        user,                                   // { id, name, email } or null
        userId: user?.id ?? null,
        name: user?.name ?? "",
        email: user?.email ?? "",
        initial: (user?.name || user?.email || "?").charAt(0).toUpperCase(),

        isLoading: status === "loading",
        isAuthenticated: status === "authenticated",

        logout: (callbackUrl = "/") => signOut({ callbackUrl }),
        refreshUser: update,                    // re-reads the session
    };
}