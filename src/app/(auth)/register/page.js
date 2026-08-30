"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";


export default function RegisterPage() {
    const [serverError, setServerError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
        reset,
    } = useForm({
        mode: "onBlur",
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const password = watch("password");

    const onSubmit = async (data) => {
        setServerError("");
        setSuccessMessage("");

        try {
            // Replace this with your actual registration API call.
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Registration failed.");
            }

            setSuccessMessage(
                result.message || "Account created successfully!"
            );

            reset();
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
                        Create your account
                    </h1>

                    <p className="mt-2 text-sm text-gray-600">
                        Start building your professional CV today.
                    </p>
                </div>

                {/* Form Card */}
                <div className="rounded-2xl bg-white text-black p-6 shadow-sm ring-1 ring-gray-200 sm:p-8">
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

                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        {/* Name */}
                        <div className="mb-5">
                            <label
                                htmlFor="name"
                                className="mb-2 block text-sm font-medium text-gray-700"
                            >
                                Name
                            </label>

                            <input
                                id="name"
                                type="text"
                                autoComplete="name"
                                placeholder="John Doe"
                                aria-invalid={errors.name ? "true" : "false"}
                                aria-describedby={errors.name ? "name-error" : undefined}
                                className={`block w-full rounded-lg border px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 ${errors.name
                                    ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                                    : "border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                                    }`}
                                {...register("name", {
                                    required: "Name is required.",
                                    minLength: {
                                        value: 2,
                                        message: "Name must be at least 2 characters.",
                                    },
                                    maxLength: {
                                        value: 50,
                                        message: "Name must not exceed 50 characters.",
                                    },
                                })}
                            />

                            {errors.name && (
                                <p
                                    id="name-error"
                                    className="mt-1.5 text-sm text-red-600"
                                >
                                    {errors.name.message}
                                </p>
                            )}
                        </div>

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
                                aria-invalid={errors.email ? "true" : "false"}
                                aria-describedby={errors.email ? "email-error" : undefined}
                                className={`block w-full rounded-lg border px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 ${errors.email
                                    ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                                    : "border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                                    }`}
                                {...register("email", {
                                    required: "Email is required.",
                                    pattern: {
                                        value:
                                            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Please enter a valid email address.",
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
                            <label
                                htmlFor="password"
                                className="mb-2 block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>

                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    autoComplete="new-password"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-12 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                                    {...register("password", {
                                        required: "Password is required.",
                                        minLength: {
                                            value: 8,
                                            message: "Password must be at least 8 characters.",
                                        },
                                        validate: {
                                            uppercase: (value) =>
                                                /[A-Z]/.test(value) ||
                                                "Password must contain an uppercase letter.",
                                            lowercase: (value) =>
                                                /[a-z]/.test(value) ||
                                                "Password must contain a lowercase letter.",
                                            number: (value) =>
                                                /\d/.test(value) ||
                                                "Password must contain a number.",
                                        },
                                    })}
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-500 transition hover:text-emerald-600"
                                    aria-label={
                                        showPassword ? "Hide password" : "Show password"
                                    }
                                >
                                    {showPassword ? (
                                        // Eye Off
                                        <FiEyeOff></FiEyeOff>
                                    ) : (
                                        // Eye
                                        <FiEye></FiEye>
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

                        {/* Confirm Password */}
                        <div className="mb-6">
                            <label
                                htmlFor="confirmPassword"
                                className="mb-2 block text-sm font-medium text-gray-700"
                            >
                                Confirm Password
                            </label>

                            <div className="relative">
                                <input
                                    id="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    autoComplete="new-password"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-12 text-sm outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                                    {...register("confirmPassword", {
                                        required: "Please confirm your password.",
                                        validate: (value) =>
                                            value === password || "Passwords do not match.",
                                    })}
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-500 transition hover:text-emerald-600"
                                    aria-label={
                                        showConfirmPassword ? "Hide password" : "Show password"
                                    }
                                >
                                    {showConfirmPassword ? (
                                        // Eye Off
                                        <FiEyeOff></FiEyeOff>
                                    ) : (
                                        // Eye
                                        <FiEye></FiEye>
                                    )}
                                </button>
                            </div>


                            {errors.confirmPassword && (
                                <p
                                    id="confirm-password-error"
                                    className="mt-1.5 text-sm text-red-600"
                                >
                                    {errors.confirmPassword.message}
                                </p>
                            )}
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full rounded-lg bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {isSubmitting ? "Creating account..." : "Create account"}
                        </button>
                    </form>

                    {/* Login Link */}
                    <p className="mt-6 text-center text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link
                            href="/sign-in"
                            className="font-semibold text-emerald-600 hover:text-emerald-700"
                        >
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
}