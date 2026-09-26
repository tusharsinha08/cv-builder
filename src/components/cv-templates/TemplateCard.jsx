"use client";

import { useEffect, useRef, useState } from "react";
import { FiEye, FiX } from "react-icons/fi";
import TemplateRenderer from "@/components/resume/templates/TemplateRenderer";
import { previewData } from "@/components/resume/preview/previewData";

export default function TemplateCard({ template }) {
    const [preview, setPreview] = useState(false);
    const previewRef = useRef(null);
    const [previewScale, setPreviewScale] = useState(0.38);

    const handleUseTemplate = () => {
        window.location.href = `/resume-editor?template=${template.slug}`;
    };

    useEffect(() => {
        const element = previewRef.current;

        if (!element) return;

        const updateScale = () => {
            const width = element.clientWidth;

            // 794px = A4 resume width
            setPreviewScale(width / 794);
        };

        updateScale();

        const observer = new ResizeObserver(updateScale);

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div className="flex flex-col">
                {/* Template Name */}
                <h3 className="mb-3 text-center text-base font-semibold text-slate-900">
                    {template.name}
                </h3>

                {/* Template Card */}
                <article
                    className="
                        group relative overflow-hidden
                        rounded-xl border-2 border-slate-200
                        bg-white shadow-sm
                        transition duration-300
                        hover:-translate-y-1
                        hover:border-slate-300
                        hover:shadow-xl
                    "
                >
                    {/* Template Preview */}
                    <div
                        ref={previewRef}
                        className="relative aspect-[794/1123] w-full overflow-hidden bg-slate-200"
                    >
                        <div
                            className="
                                absolute left-0 top-0
                                h-[1123px] w-[794px]
                                origin-top-left
                            "
                            style={{
                                transform: `scale(${previewScale})`,
                            }}
                        >
                            <TemplateRenderer
                                templateId={template.slug}
                                resume={previewData}
                            />
                        </div>

                        {/* Hover Overlay */}
                        <div
                            className="
                                absolute inset-0 z-20
                                flex items-center justify-center
                                bg-slate-600/10
                                opacity-0
                                transition duration-300
                                group-hover:opacity-100
                            "
                        >
                            <div className="flex gap-3">
                                {/* Preview */}
                                <button
                                    type="button"
                                    onClick={() => setPreview(true)}
                                    className="
                                        inline-flex items-center gap-2
                                        rounded-lg bg-white
                                        px-4 py-2.5
                                        text-sm font-semibold
                                        text-slate-800
                                        shadow-lg
                                        transition
                                        hover:bg-slate-100
                                    "
                                >
                                    <FiEye className="h-4 w-4" />
                                    Preview
                                </button>

                                {/* Use Template */}
                                <button
                                    type="button"
                                    onClick={handleUseTemplate}
                                    className="
                                        rounded-lg bg-emerald-600
                                        px-4 py-2.5
                                        text-sm font-semibold
                                        text-white
                                        shadow-lg
                                        transition
                                        hover:bg-emerald-700
                                    "
                                >
                                    Use Template
                                </button>
                            </div>
                        </div>

                        {/* Popular Badge */}
                        {template.popular && (
                            <div className="absolute left-3 top-3 z-30">
                                <span
                                    className="
                                        rounded-full
                                        bg-emerald-600
                                        px-3 py-1
                                        text-xs font-semibold
                                        text-white shadow
                                    "
                                >
                                    Popular
                                </span>
                            </div>
                        )}
                    </div>
                </article>
            </div>

            {/* Template Preview Modal */}
            {preview && (
                <div
                    className="
                        fixed inset-0 z-[100]
                        flex items-center justify-center
                        bg-slate-950/70
                        p-4
                        backdrop-blur-sm
                    "
                    onClick={() => setPreview(false)}
                >
                    <div
                        className="
                            relative max-h-[95vh]
                            w-full max-w-4xl
                            overflow-auto
                            rounded-xl
                            bg-slate-100
                            p-6
                            shadow-2xl
                        "
                        onClick={(event) => event.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            type="button"
                            onClick={() => setPreview(false)}
                            className="
                                absolute right-4 top-4 z-10
                                rounded-full bg-white
                                p-2
                                text-slate-500
                                shadow
                                transition
                                hover:text-slate-900
                            "
                            aria-label="Close preview"
                        >
                            <FiX className="h-5 w-5" />
                        </button>

                        {/* Modal Title */}
                        <h2 className="mb-6 text-2xl font-bold text-slate-900">
                            {template.name}
                        </h2>

                        {/* Full Template */}
                        <div className="flex justify-center overflow-auto">
                            <div className="w-full max-w-[794px]">
                                <TemplateRenderer
                                    templateId={template.slug}
                                    resume={previewData}
                                />
                            </div>
                        </div>

                        {/* Use Template */}
                        <button
                            type="button"
                            onClick={handleUseTemplate}
                            className="
                                mt-6 w-full
                                rounded-xl
                                bg-emerald-600
                                px-5 py-3.5
                                font-semibold
                                text-white
                                transition
                                hover:bg-emerald-700
                            "
                        >
                            Use {template.name} Template
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}