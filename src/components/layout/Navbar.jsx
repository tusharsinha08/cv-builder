"use client";

import { useScroll } from "@/hooks/useScroll";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
    {
        label: "CV Templates",
        href: "/cv-templates",
    },
    {
        label: "CV Examples",
        href: "/cv-examples",
    },
    {
        label: "Cover Letter",
        href: "/cover-letter",
    },
    {
        label: "FAQ",
        href: "/faq",
    },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const scroll = useScroll();

    // Replace this with your actual authentication state.
    const isAuthenticated = false;

    return (
        <header
            className={`fixed top-0 z-50 w-full border-b border-white/10 bg-white/50 backdrop-blur-xl backdrop-saturate-150 shadow-sm transition-transform duration-300
                ${scroll === "down" ?
                    "-translate-y-full" :
                    "translate-y-0"
                }`}
        >
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-2xl font-bold tracking-tight text-gray-900"
                >
                    CV<span className="text-emerald-600">Builder</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-gray-600 transition-colors hover:text-emerald-600"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Desktop Auth Button */}
                <div className="hidden md:block">
                    {isAuthenticated ? (
                        <Link
                            href="/my-account"
                            className="rounded-lg border border-emerald-600 px-5 py-2.5 text-sm font-semibold text-emerald-600 transition hover:border-emerald-400 hover:bg-gray-50"
                        >
                            My Account
                        </Link>
                    ) : (
                        <div className="flex gap-4">
                            <Link
                                href="/sign-in"
                                className="rounded-lg border border-emerald-600 px-5 py-2.5 text-sm font-semibold text-emerald-600 transition hover:bg-gray-100"
                            >
                                Sign In
                            </Link>

                            <Link
                                href="/sign-in"
                                className="rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
                            >
                                Create My CV
                            </Link>
                        </div>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
                >
                    {isMenuOpen ? (
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </nav>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="border-t border-gray-200 bg-white md:hidden">
                    <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
                        <div className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="rounded-lg px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-emerald-600"
                                >
                                    {link.label}
                                </Link>
                            ))}

                            <div className="mt-3 border-t border-gray-100 pt-3">
                                {isAuthenticated ? (
                                    <Link
                                        href="/my-account"
                                        className="rounded-lg border border-emerald-600 px-5 py-2.5 text-sm font-semibold text-emerald-600 transition hover:border-emerald-400 hover:bg-gray-50"
                                    >
                                        My Account
                                    </Link>
                                ) : (
                                    <div className="flex gap-4">
                                        <Link
                                            href="/sign-in"
                                            className="rounded-lg border border-emerald-600 px-5 py-2.5 text-sm font-semibold text-emerald-600 transition hover:bg-gray-100"
                                        >
                                            Sign In
                                        </Link>

                                        <Link
                                            href="/sign-in"
                                            className="rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
                                        >
                                            Create My CV
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}