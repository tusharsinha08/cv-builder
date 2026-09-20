"use client";

import { useState } from "react";

import ResumeForm from "./editor/ResumeForm";
import ResumePreview from "./preview/ResumePreview";

const initialResume = {
    personal: {
        fullName: "John Doe",
        jobTitle: "Full Stack Developer",
        email: "john.doe@example.com",
        phone: "+880 1234 567890",
        location: "Sylhet, Bangladesh",
        website: "www.johndoe.com",
        linkedin: "linkedin.com/in/johndoe",
    },

    summary:
        "Experienced Full Stack Developer with a strong background in building modern, scalable, and user-friendly web applications. Passionate about clean code, performance, and creating great user experiences.",

    experience: [
        {
            id: 1,
            jobTitle: "Senior Full Stack Developer",
            company: "ABC Technologies",
            location: "Dhaka, Bangladesh",
            startDate: "2023",
            endDate: "Present",
            description:
                "Developed and maintained scalable web applications using Next.js, React, Node.js, and PostgreSQL.",
        },
        {
            id: 2,
            jobTitle: "Frontend Developer",
            company: "XYZ Software",
            location: "Sylhet, Bangladesh",
            startDate: "2021",
            endDate: "2023",
            description:
                "Built responsive and reusable UI components using React and Tailwind CSS.",
        },
    ],

    education: [
        {
            id: 1,
            degree: "BSc in Computer Science",
            institution: "Leading University",
            location: "Sylhet, Bangladesh",
            startDate: "2017",
            endDate: "2021",
        },
    ],

    skills: [
        "JavaScript",
        "React",
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "Prisma",
        "Tailwind CSS",
    ],
};

export default function ResumeEditor() {
    const [resume, setResume] = useState(initialResume);
    const [showPreview, setShowPreview] = useState(false);

    return (
        <main className="h-screen overflow-hidden bg-slate-100">

            <div className="mx-auto flex h-full max-w-[1600px] flex-col lg:flex-row">

                {/* Editor Panel */}
                <section
                    className={`h-full w-full overflow-y-auto bg-white lg:block lg:w-[45%] ${showPreview ? "hidden" : "block"
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
                    className={`h-full w-full overflow-y-auto lg:block lg:w-[55%] ${showPreview ? "block" : "hidden"
                        }`}
                >
                    <ResumePreview
                        resume={resume}
                        onBackToEditor={() => setShowPreview(false)}
                    />
                </section>

            </div>
        </main>
    );
}