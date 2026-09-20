import PersonalInfo from "./PersonalInfo";
import Summary from "./Summary";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";

export default function ResumeForm({
    resume,
    setResume,
    onPreview,
}) {
    return (
        <div className="border-r border-slate-200">

            {/* Header */}
            <div className="sticky top-0 z-20 border-b border-slate-200 bg-white px-6 py-5">

                <div className="flex items-center justify-between gap-4">

                    <div>
                        <h1 className="text-xl font-semibold text-slate-900">
                            Resume Editor
                        </h1>

                        <p className="mt-1 text-sm text-slate-500">
                            Enter your information to build your resume.
                        </p>
                    </div>

                    {/* Mobile Preview Button */}
                    <button
                        type="button"
                        onClick={onPreview}
                        className="shrink-0 rounded-lg bg-emerald-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-emerald-700 lg:hidden"
                    >
                        Preview
                    </button>

                </div>

            </div>

            {/* Form Sections */}
            <div className="space-y-8 p-6">

                <PersonalInfo
                    personal={resume.personal}
                    setResume={setResume}
                />

                <Summary
                    summary={resume.summary}
                    setResume={setResume}
                />

                <Experience
                    experience={resume.experience}
                    setResume={setResume}
                />

                <Education
                    education={resume.education}
                    setResume={setResume}
                />

                <Skills
                    skills={resume.skills}
                    setResume={setResume}
                />

            </div>

        </div>
    );
}