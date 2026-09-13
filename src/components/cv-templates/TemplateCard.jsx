"use client";

import { useState } from "react";
import { FiEye } from "react-icons/fi";

const colorClasses = {
    emerald: "bg-emerald-600",
    blue: "bg-blue-600",
    slate: "bg-slate-700",
    purple: "bg-purple-600",
    indigo: "bg-indigo-600",
    gray: "bg-gray-700",
    rose: "bg-rose-600",
    cyan: "bg-cyan-600",
    orange: "bg-orange-600",
    green: "bg-green-600",
};

export default function TemplateCard({ template }) {
    const [preview, setPreview] = useState(false);

    const colorClass =
        colorClasses[template.color] || "bg-emerald-600";

    const handleUseTemplate = () => {
        // Later this can navigate to:
        // /create-resume?template=modern

        window.location.href = `/create-resume?template=${template.slug}`;
    };

    return (
        <>
            <article className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

                {/* Template Preview */}
                <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">

                    {/* Fake CV */}
                    <div className="h-full w-full overflow-hidden bg-white shadow-md">

                        {/* Header */}
                        <div className={`${colorClass} px-5 py-4`}>
                            <div className="h-3 w-28 rounded bg-white/90" />
                            <div className="mt-2 h-2 w-20 rounded bg-white/50" />
                        </div>

                        {/* CV Content */}
                        <div className="space-y-4 p-5">

                            <div>
                                <div className="h-2 w-24 rounded bg-slate-800" />
                                <div className="mt-2 h-1.5 w-full rounded bg-slate-200" />
                                <div className="mt-1.5 h-1.5 w-11/12 rounded bg-slate-200" />
                            </div>

                            <div>
                                <div className="mb-2 h-2 w-20 rounded bg-slate-700" />

                                <div className="mb-3">
                                    <div className="h-1.5 w-28 rounded bg-slate-700" />
                                    <div className="mt-1.5 h-1.5 w-full rounded bg-slate-200" />
                                    <div className="mt-1.5 h-1.5 w-10/12 rounded bg-slate-200" />
                                </div>

                                <div>
                                    <div className="h-1.5 w-32 rounded bg-slate-700" />
                                    <div className="mt-1.5 h-1.5 w-full rounded bg-slate-200" />
                                    <div className="mt-1.5 h-1.5 w-9/12 rounded bg-slate-200" />
                                </div>
                            </div>

                            <div>
                                <div className="mb-2 h-2 w-16 rounded bg-slate-700" />

                                <div className="flex gap-2">
                                    <div className="h-5 w-12 rounded bg-slate-100" />
                                    <div className="h-5 w-16 rounded bg-slate-100" />
                                    <div className="h-5 w-14 rounded bg-slate-100" />
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Popular Badge */}
                    {template.popular && (
                        <div className="absolute left-8 top-8">
                            <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white shadow">
                                Popular
                            </span>
                        </div>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-950/50 opacity-0 backdrop-blur-[2px] transition duration-300 group-hover:opacity-100">

                        <div className="flex gap-3">

                            <button
                                type="button"
                                onClick={() => setPreview(true)}
                                className="rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-lg transition hover:bg-slate-100 cursor-pointer"
                            >
                                Preview
                            </button>

                            <button
                                type="button"
                                onClick={handleUseTemplate}
                                className="rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-700 cursor-pointer"
                            >
                                Use Template
                            </button>

                        </div>
                    </div>
                </div>

                {/* Template Information */}
                <div className="p-4">

                    <div className="flex items-start justify-between gap-3">

                        <div>
                            <h3 className="text-lg font-semibold text-slate-900">
                                {template.name}
                            </h3>

                            <p className="mt-1 text-sm text-slate-500">
                                {template.category}
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={() => setPreview(true)}
                            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                            aria-label={`Preview ${template.name}`}
                        >
                            <FiEye className="h-5 w-5" />
                        </button>

                    </div>
                </div>
            </article>

            {/* Preview Modal */}
            {preview && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
                    onClick={() => setPreview(false)}
                >
                    <div
                        className="relative max-h-screen w-full max-w-4xl overflow-auto bg-white p-6 shadow-2xl"
                        onClick={(event) => event.stopPropagation()}
                    >

                        <button
                            type="button"
                            onClick={() => setPreview(false)}
                            className="absolute right-4 top-4 rounded-full bg-slate-100 p-2 text-slate-500 transition hover:bg-slate-200 hover:text-slate-900"
                            aria-label="Close preview"
                        >
                            <svg
                                className="h-5 w-5"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 6l12 12M18 6 6 18"
                                />
                            </svg>
                        </button>

                        <div className="mb-6">
                            <h2 className="mt-1 text-2xl font-bold text-slate-900">
                                {template.name}
                            </h2>
                        </div>

                        {/* Larger Preview */}
                        <div className="mx-auto bg-slate-100">
                            <div className="bg-white shadow-xl">

                                <div className={`${colorClass} px-10 py-10`}>
                                    <div className="h-5 w-48 rounded bg-white" />
                                    <div className="mt-3 h-3 w-32 rounded bg-white/60" />
                                </div>

                                <div className="space-y-8 p-10">

                                    <div>
                                        <div className="h-3 w-36 rounded bg-slate-800" />
                                        <div className="mt-3 h-2 w-full rounded bg-slate-200" />
                                        <div className="mt-2 h-2 w-11/12 rounded bg-slate-200" />
                                        <div className="mt-2 h-2 w-9/12 rounded bg-slate-200" />
                                    </div>

                                    <div>
                                        <div className="h-3 w-28 rounded bg-slate-800" />

                                        {[1, 2, 3].map((item) => (
                                            <div
                                                key={item}
                                                className="mt-5"
                                            >
                                                <div className="h-2.5 w-40 rounded bg-slate-700" />
                                                <div className="mt-2 h-2 w-full rounded bg-slate-200" />
                                                <div className="mt-2 h-2 w-10/12 rounded bg-slate-200" />
                                            </div>
                                        ))}
                                    </div>

                                    <div>
                                        <div className="h-3 w-24 rounded bg-slate-800" />

                                        <div className="mt-4 flex flex-wrap gap-3">
                                            {[1, 2, 3, 4, 5].map((item) => (
                                                <div
                                                    key={item}
                                                    className="h-8 w-20 rounded bg-slate-100"
                                                />
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={handleUseTemplate}
                            className="mt-6 w-full rounded-xl bg-emerald-600 px-5 py-3.5 font-semibold text-white transition hover:bg-emerald-700"
                        >
                            Use {template.name} Template
                        </button>

                    </div>
                </div>
            )}
        </>
    );
}