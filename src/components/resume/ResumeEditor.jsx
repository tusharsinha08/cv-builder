"use client";

import { useState } from "react";

import ResumeForm from "./editor/ResumeForm";
import ResumePreview from "./preview/ResumePreview";

const initialResume = {
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
    const [resume, setResume] = useState(initialResume);
    const [showPreview, setShowPreview] = useState(false);

    return (
        <main className="h-screen overflow-hidden bg-slate-100">

            <div className="mx-auto flex h-full flex-col lg:flex-row">

                {/* Editor Panel */}
                <section
                    className={`h-full w-full overflow-y-auto bg-white lg:block lg:w-[50%] ${showPreview ? "hidden" : "block"
                        }`}
                >
                    <ResumeForm
                        resume={resume}
                        setResume={setResume}
                        onPreview={() => setShowPreview(true)}
                    />
                </section>

                {/* Preview Panel */}
                <section
                    className={`h-full w-full overflow-y-auto lg:block lg:w-[50%] ${showPreview ? "block" : "hidden"
                        }`}
                >
                    <ResumePreview
                        resume={resume}
                        templateId={resume.templateId}
                        onBackToEditor={() => setShowPreview(false)}
                    />
                </section>

            </div>
        </main>
    );
}