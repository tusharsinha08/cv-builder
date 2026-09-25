"use client";

import { templateRegistry } from "../templates/templateRegistry";

export default function ResumePreview({
    resume,
    templateId = "classic",
    onBackToEditor,
}) {
    const SelectedTemplate = templateRegistry[templateId] || templateRegistry.classic;

    return (
        <div className="min-h-screen bg-slate-100 print:bg-white">
            {/* Preview Toolbar */}
            <div className="sticky top-0 z-20 border-b border-slate-200 bg-white px-6 py-4 print:hidden">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-slate-800">
                        Resume Preview
                    </h2>

                    <div className="flex gap-2">
                        <button
                            type="button"
                            onClick={onBackToEditor}
                            className="rounded-lg border border-slate-300 px-4 py-2 text-sm lg:hidden"
                        >
                            Back
                        </button>

                        <button
                            type="button"
                            onClick={() => window.print()}
                            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm text-white"
                        >
                            Print
                        </button>
                    </div>
                </div>
            </div>

            {/* Selected Template */}
            <div className="flex justify-center sm:p-2 print:block print:p-0">
                <SelectedTemplate resume={resume} />
            </div>
        </div>
    );
}