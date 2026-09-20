import PreviewHeader from "./PreviewHeader";
import PreviewSection from "./PreviewSection";
import PreviewExperience from "./PreviewExperience";
import PreviewEducation from "./PreviewEducation";
import PreviewSkills from "./PreviewSkills";

export default function ResumePreview({
    resume,
    onBackToEditor,
}) {
    return (
        <div className="h-full overflow-y-auto bg-slate-100">

            {/* Preview Header */}
            <div className="sticky top-0 z-20 border-b border-slate-200 bg-white px-6 py-4">

                <div className="flex items-center justify-between gap-4">

                    <div>
                        <h2 className="text-lg font-semibold text-slate-900">
                            Live Preview
                        </h2>

                        <p className="text-sm text-slate-500">
                            Your resume updates automatically.
                        </p>
                    </div>

                    <div className="flex items-center gap-2">

                        {/* Mobile Back Button */}
                        <button
                            type="button"
                            onClick={onBackToEditor}
                            className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 lg:hidden"
                        >
                            Back
                        </button>

                        {/* Print Button */}
                        <button
                            type="button"
                            onClick={() => window.print()}
                            className="rounded-lg bg-emerald-600 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-700"
                        >
                            Print
                        </button>

                    </div>

                </div>

            </div>

            {/* Resume Paper */}
            <div className="flex justify-center p-4 sm:p-10">

                <article
                    id="resume-preview"
                    className="w-full max-w-[794px] bg-white p-6 shadow-lg sm:p-12"
                >
                    <PreviewHeader
                        personal={resume.personal}
                    />

                    {resume.summary && (
                        <PreviewSection title="Professional Summary">
                            <p className="text-sm leading-6 text-slate-700">
                                {resume.summary}
                            </p>
                        </PreviewSection>
                    )}

                    {resume.experience.length > 0 && (
                        <PreviewSection title="Work Experience">
                            <PreviewExperience
                                experience={resume.experience}
                            />
                        </PreviewSection>
                    )}

                    {resume.education.length > 0 && (
                        <PreviewSection title="Education">
                            <PreviewEducation
                                education={resume.education}
                            />
                        </PreviewSection>
                    )}

                    {resume.skills.length > 0 && (
                        <PreviewSection title="Skills">
                            <PreviewSkills
                                skills={resume.skills}
                            />
                        </PreviewSection>
                    )}
                </article>

            </div>
        </div>
    );
}