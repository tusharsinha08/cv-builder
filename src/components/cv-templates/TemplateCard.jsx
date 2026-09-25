"use client";

import { useState } from "react";
import { FiEye, FiX } from "react-icons/fi";
import TemplateRenderer from "@/components/resume/templates/TemplateRenderer";
import { previewData } from "@/components/resume/preview/previewData";

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
        window.location.href = `/resume-editor?template=${template.slug}`;
    };

    return (
        <>
            <article className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

                {/* Actual Template Thumbnail */}
                <div className="relative aspect-[3/4] overflow-hidden bg-slate-200">
                    <div
                        className="
            absolute
            left-1/2
            top-0
            w-[794px]
            origin-top
            -translate-x-1/2
            scale-[0.38]
        "
                    >
                        <TemplateRenderer
                            templateId={template.slug}
                            resume={previewData}
                        />
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-slate-950/50 opacity-0 backdrop-blur-[2px] transition duration-300 group-hover:opacity-100">
                        <div className="flex gap-3">
                            <button
                                type="button"
                                onClick={() => setPreview(true)}
                                className="rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-lg transition hover:bg-slate-100"
                            >
                                Preview
                            </button>

                            <button
                                type="button"
                                onClick={handleUseTemplate}
                                className="rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-700"
                            >
                                Use Template
                            </button>
                        </div>
                    </div>

                    {/* Popular Badge */}
                    {template.popular && (
                        <div className="absolute left-3 top-3 z-30">
                            <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white shadow">
                                Popular
                            </span>
                        </div>
                    )}
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

            {/* Actual Template Preview Modal */}
            {preview && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
                    onClick={() => setPreview(false)}
                >
                    <div
                        className="relative max-h-[95vh] w-full max-w-4xl overflow-auto rounded-xl bg-slate-100 p-6 shadow-2xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setPreview(false)}
                            className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 text-slate-500 shadow hover:text-slate-900"
                            aria-label="Close preview"
                        >
                            <FiX className="h-5 w-5" />
                        </button>

                        <h2 className="mb-6 text-2xl font-bold text-slate-900">
                            {template.name}
                        </h2>

                        <div className="flex justify-center overflow-auto">
                            <div className="w-full max-w-[794px]">
                                <TemplateRenderer
                                    templateId={template.slug}
                                    resume={previewData}
                                />
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