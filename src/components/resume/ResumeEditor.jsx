"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

import ResumeForm from "./editor/ResumeForm";
import ResumePreview from "./preview/ResumePreview";
import EditorToolbar from "./toolbar/EditorToolbar";
import TemplateSelector from "./templates/TemplateSelector";
import CustomizePanel from "./customize/CustomizePanel";

import { templateRegistry } from "@/components/resume/templates/templateRegistry";

const initialResume = {
    templateId: "classic",

    personal: {
        fullName: "",
        jobTitle: "",
        email: "",
        phone: "",
        location: "",
        website: "",
        linkedin: "",
    },

    summary: "",

    experience: [],

    education: [],

    skills: [],

    sectionOrder: [
        "personal",
        "summary",
        "experience",
        "education",
        "skills",
    ],
};

export default function ResumeEditor() {
    const searchParams = useSearchParams();

    /*
     * Get template from URL.
     *
     * Example:
     * /resume-editor?template=classic
     * /resume-editor?template=modern
     */
    const templateFromUrl = searchParams.get("template");

    /*
     * Only allow templates that actually exist
     * in the template registry.
     *
     * Always fall back to "classic".
     */
    const selectedTemplate =
        templateFromUrl &&
        templateRegistry[templateFromUrl]
            ? templateFromUrl
            : "classic";

    /*
     * Initialize resume with the selected template.
     */
    const [resume, setResume] = useState(() => ({
        ...initialResume,
        templateId: selectedTemplate,
    }));

    const [activeTab, setActiveTab] = useState("edit");
    const [showPreview, setShowPreview] = useState(false);

    const handleSave = () => {
        // TODO:
        // Save resume to database
        console.log("Saving resume...", resume);
    };

    const handleDownload = () => {
        // TODO:
        // Generate/download PDF
        console.log("Downloading resume...");
    };

    const renderWorkspace = () => {
        switch (activeTab) {
            case "templates":
                return (
                    <TemplateSelector
                        resume={resume}
                        setResume={setResume}
                    />
                );

            case "customize":
                return (
                    <CustomizePanel
                        resume={resume}
                        setResume={setResume}
                    />
                );

            case "edit":
            default:
                return (
                    <ResumeForm
                        resume={resume}
                        setResume={setResume}
                        onPreview={() => setShowPreview(true)}
                    />
                );
        }
    };

    return (
        <main className="flex h-screen flex-col overflow-hidden bg-slate-100">
            {/* Toolbar */}
            <EditorToolbar
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                onSave={handleSave}
                onDownload={handleDownload}
                onPreview={() => setShowPreview(true)}
            />

            {/* Editor + Preview */}
            <div className="min-h-0 flex-1">
                <div className="mx-auto flex h-full w-full gap-2 p-1">

                    {/* Editor / Workspace */}
                    <section
                        className={`
                            h-full w-full overflow-y-auto
                            lg:block lg:w-[50%]
                            ${showPreview ? "hidden" : "block"}
                        `}
                    >
                        {renderWorkspace()}
                    </section>

                    {/* Preview */}
                    <section
                        className={`
                            h-full w-full overflow-y-auto
                            lg:block lg:w-[50%]
                            ${showPreview ? "block" : "hidden"}
                        `}
                    >
                        <ResumePreview
                            resume={resume}
                            templateId={resume.templateId}
                            onBackToEditor={() =>
                                setShowPreview(false)
                            }
                        />
                    </section>

                </div>
            </div>
        </main>
    );
}