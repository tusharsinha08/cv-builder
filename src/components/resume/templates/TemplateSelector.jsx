"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { FiCheck } from "react-icons/fi";

import TemplateRenderer from "@/components/resume/templates/TemplateRenderer";
import { templateRegistry } from "@/components/resume/templates/templateRegistry";
import { previewData } from "@/components/resume/preview/previewData";

import TemplateFilters from "@/components/cv-templates/TemplateFilters";
import { templates } from "@/components/cv-templates/templates";

function TemplateSelectorCard({
    template,
    isActive,
    onSelect,
}) {
    const previewRef = useRef(null);
    const [previewScale, setPreviewScale] = useState(0.34);

    useEffect(() => {
        const element = previewRef.current;

        if (!element) {
            return;
        }

        const updateScale = () => {
            const width = element.clientWidth;

            if (!width) {
                return;
            }

            // A4 resume canvas width
            const scale = width / 794;

            setPreviewScale(scale);
        };

        // Initial calculation
        updateScale();

        // Recalculate whenever the card width changes
        const observer = new ResizeObserver(updateScale);

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="flex min-w-0 flex-col">
            {/* Template Name */}
            <h3 className="mb-2 text-center text-sm font-semibold text-slate-900">
                {template.name}
            </h3>

            {/* Template Card */}
            <button
                type="button"
                onClick={() => onSelect(template.slug)}
                className={`
                    group relative w-full overflow-hidden
                    rounded-xl border-2
                    bg-white text-left
                    transition duration-200
                    ${isActive
                        ? "border-emerald-600 shadow-md"
                        : "border-slate-200 hover:border-emerald-600 hover:shadow-md"
                    }
                `}
            >
                {/* Template Preview */}
                <div
                    ref={previewRef}
                    className="
                        relative
                        aspect-[794/1123]
                        w-full
                        overflow-hidden
                        bg-slate-100
                    "
                >
                    {/* Fixed A4 Resume Canvas */}
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

                    {/* Selected Indicator */}
                    {isActive && (
                        <div
                            className="
                                absolute inset-0 z-20
                                flex items-center justify-center
                                bg-slate-600/10
                            "
                        >
                            <div
                                className="
                                    flex h-12 w-12
                                    items-center justify-center
                                    rounded-full
                                    bg-emerald-600
                                    text-white
                                    shadow-lg
                                    ring-4 ring-white/80
                                "
                            >
                                <FiCheck
                                    className="h-6 w-6"
                                    strokeWidth={3}
                                />
                            </div>
                        </div>
                    )}

                    {/* Hover Overlay */}
                    {!isActive && (
                        <div
                            className="
                                absolute inset-0 z-10
                                bg-slate-950/0
                                transition duration-200
                                group-hover:bg-slate-950/5
                            "
                        />
                    )}
                </div>
            </button>
        </div>
    );
}

export default function TemplateSelector({
    resume,
    setResume,
}) {
    const [activeCategory, setActiveCategory] = useState("All");

    /*
     * Only show templates that have an actual
     * component registered in templateRegistry.
     */
    const availableTemplates = useMemo(() => {
        return templates.filter(
            (template) =>
                templateRegistry[template.slug]
        );
    }, []);

    /*
     * Filter templates by category.
     */
    const filteredTemplates = useMemo(() => {
        if (activeCategory === "All") {
            return availableTemplates;
        }

        return availableTemplates.filter(
            (template) =>
                template.category === activeCategory
        );
    }, [availableTemplates, activeCategory]);

    /*
     * Change the selected resume template.
     */
    const handleTemplateChange = (templateSlug) => {
        setResume((previous) => ({
            ...previous,
            templateId: templateSlug,
        }));
    };

    return (
        <div className="mx-auto w-full rounded-lg border bg-white p-6">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-xl font-semibold text-slate-900">
                    Choose a template
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                    Select a template for your resume.
                </p>
            </div>

            {/* Filters */}
            <div className="mb-6">
                <TemplateFilters
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                />
            </div>

            {/* Templates */}
            {filteredTemplates.length > 0 ? (
                <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
                    {filteredTemplates.map((template) => (
                        <TemplateSelectorCard
                            key={template.id}
                            template={template}
                            isActive={
                                resume.templateId === template.slug
                            }
                            onSelect={handleTemplateChange}
                        />
                    ))}
                </div>
            ) : (
                /* Empty State */
                <div
                    className="
                        rounded-xl
                        border border-dashed border-slate-300
                        bg-slate-50
                        px-6 py-12
                        text-center
                    "
                >
                    <h3 className="text-sm font-semibold text-slate-800">
                        No templates found
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                        There are no available templates in the{" "}
                        <span className="font-medium">
                            {activeCategory}
                        </span>{" "}
                        category.
                    </p>

                    <button
                        type="button"
                        onClick={() =>
                            setActiveCategory("All")
                        }
                        className="
                            mt-4
                            text-sm font-medium
                            text-emerald-600
                            hover:text-emerald-700
                        "
                    >
                        View all templates
                    </button>
                </div>
            )}
        </div>
    );
}
