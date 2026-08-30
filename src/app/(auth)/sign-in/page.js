"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function SignInPage() {
    const [serverError, setServerError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm({
        mode: "onBlur",
        defaultValues: {
            email: "",
            password: "",
            rememberMe: false,
        },
    });

    const onSubmit = async (data) => {
        setServerError("");
        setSuccessMessage("");

        try {
            const response = await fetch("/api/auth/sign-in", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(
                    result.message || "Invalid email or password."
                );
            }

            setSuccessMessage(
                result.message || "Login successful!"
            );

            reset();

            // Redirect after successful login.
            // Example:
            // window.location.href = "/dashboard";
        } catch (error) {
            setServerError(
                error instanceof Error
                    ? error.message
                    : "Something went wrong. Please try again."
            );
        }
    };

    return (
        <main className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-md">

                {/* Header */}
                <div className="mb-8 text-center">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-2xl font-bold tracking-tight text-gray-900"
                    >
                        CV<span className="text-emerald-600">Builder</span>
                    </Link>

                    <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
                        Welcome back
                    </h1>

                    <p className="mt-2 text-sm text-gray-600">
                        Sign in to continue building your professional CV.
                    </p>
                </div>

                {/* Form Card */}
                <div className="rounded-2xl bg-white p-6 text-black shadow-sm ring-1 ring-gray-200 sm:p-8">

                    {/* Server Error */}
                    {serverError && (
                        <div
                            role="alert"
                            className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700"
                        >
                            {serverError}
                        </div>
                    )}

                    {/* Success Message */}
                    {successMessage && (
                        <div
                            role="status"
                            className="mb-6 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700"
                        >
                            {successMessage}
                        </div>
                    )}

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                    >
                        {/* Email */}
                        <div className="mb-5">
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>

                            <input
                                id="email"
                                type="email"
                                autoComplete="email"
                                placeholder="john@example.com"
                                aria-invalid={
                                    errors.email ? "true" : "false"
                                }
                                aria-describedby={
                                    errors.email
                                        ? "email-error"
                                        : undefined
                                }
                                className={`block w-full rounded-lg border px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 ${
                                    errors.email
                                        ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                                        : "border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                                }`}
                                {...register("email", {
                                    required: "Email is required.",
                                    pattern: {
                                        value:
                                            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message:
                                            "Please enter a valid email address.",
                                    },
                                })}
                            />

                            {errors.email && (
                                <p
                                    id="email-error"
                                    className="mt-1.5 text-sm text-red-600"
                                >
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        {/* Password */}
                        <div className="mb-5">
                            <div className="mb-2 flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>

                                <Link
                                    href="/forgot-password"
                                    className="text-sm font-medium text-emerald-600 transition hover:text-emerald-700"
                                >
                                    Forgot password?
                                </Link>
                            </div>

                            <div className="relative">
                                <input
                                    id="password"
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    autoComplete="current-password"
                                    placeholder="••••••••"
                                    aria-invalid={
                                        errors.password
                                            ? "true"
                                            : "false"
                                    }
                                    aria-describedby={
                                        errors.password
                                            ? "password-error"
                                            : undefined
                                    }
                                    className={`block w-full rounded-lg border px-4 py-3 pr-12 text-sm outline-none transition placeholder:text-gray-400 ${
                                        errors.password
                                            ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                                            : "border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                                    }`}
                                    {...register("password", {
                                        required:
                                            "Password is required.",
                                    })}
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(
                                            (prev) => !prev
                                        )
                                    }
                                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-500 transition hover:text-emerald-600"
                                    aria-label={
                                        showPassword
                                            ? "Hide password"
                                            : "Show password"
                                    }
                                >
                                    {showPassword ? (
                                        <FiEyeOff className="h-5 w-5" />
                                    ) : (
                                        <FiEye className="h-5 w-5" />
                                    )}
                                </button>
                            </div>

                            {errors.password && (
                                <p
                                    id="password-error"
                                    className="mt-1.5 text-sm text-red-600"
                                >
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        {/* Remember Me */}
                        <div className="mb-6 flex items-center">
                            <input
                                id="rememberMe"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                                {...register("rememberMe")}
                            />

                            <label
                                htmlFor="rememberMe"
                                className="ml-2 text-sm text-gray-600"
                            >
                                Remember me
                            </label>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full rounded-lg bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {isSubmitting
                                ? "Signing in..."
                                : "Sign in"}
                        </button>
                    </form>

                    {/* Register Link */}
                    <p className="mt-6 text-center text-sm text-gray-600">
                        Don't have an account?{" "}
                        <Link
                            href="/register"
                            className="font-semibold text-emerald-600 transition hover:text-emerald-700"
                        >
                            Create an account
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
}