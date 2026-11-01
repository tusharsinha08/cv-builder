"use client";

import { useAuth } from "@/hooks/useAuth";

export default function DashboardClient({ serverUser }) {
    const { user, isLoading, isAuthenticated, logout } = useAuth();

    return (
        <main className="min-h-screen bg-slate-50 p-6">
            <div className="mx-auto max-w-2xl space-y-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-slate-900">
                        Dashboard <span className="text-sm font-normal text-slate-400">(temporary test page)</span>
                    </h1>

                    <button
                        type="button"
                        onClick={() => logout("/sign-in")}
                        className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
                    >
                        Log out
                    </button>
                </div>

                {/* Client hook */}
                <section className="rounded-xl border border-slate-200 bg-white p-5">
                    <h2 className="mb-3 font-semibold text-slate-900">
                        Client: useAuth()
                    </h2>

                    <p className="text-sm text-slate-600">
                        Status:{" "}
                        <span className="font-medium">
                            {isLoading ? "loading..." : isAuthenticated ? "authenticated" : "not authenticated"}
                        </span>
                    </p>

                    <pre className="mt-3 overflow-auto rounded-lg bg-slate-900 p-4 text-xs text-emerald-300">
                        {JSON.stringify(user, null, 2)}
                    </pre>
                </section>

                {/* Server check */}
                <section className="rounded-xl border border-slate-200 bg-white p-5">
                    <h2 className="mb-3 font-semibold text-slate-900">
                        Server: getCurrentUser()
                    </h2>

                    <pre className="overflow-auto rounded-lg bg-slate-900 p-4 text-xs text-emerald-300">
                        {JSON.stringify(serverUser, null, 2)}
                    </pre>
                </section>
            </div>
        </main>
    );
}