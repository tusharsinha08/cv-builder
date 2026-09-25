import PreviewEducation from "../preview/PreviewEducation";
import PreviewExperience from "../preview/PreviewExperience";
import PreviewHeader from "../preview/PreviewHeader";
import PreviewSkills from "../preview/PreviewSkills";
import PreviewSummary from "../preview/PreviewSummary";

export default function ClassicTemplate({ resume }) {
    const {
        personal = {},
        summary = "",
        experience = [],
        education = [],
        skills = [],

        sectionOrder = [
            "summary",
            "experience",
            "education",
            "skills",
        ],
    } = resume;

    const sections = {
        summary: (
            <PreviewSummary
                summary={summary}
            />
        ),

        experience: (
            <PreviewExperience
                experience={experience}
            />
        ),

        education: (
            <PreviewEducation
                education={education}
            />
        ),

        skills: (
            <PreviewSkills
                skills={skills}
            />
        ),
    };

    return (
        <article
            className="mx-auto box-border flex min-h-[1123px] w-[794px] flex-col overflow-hidden bg-white py-[56px] px-12 font-sans text-slate-900"
        >

            {/* Fixed Header */}
            <PreviewHeader
                personal={personal}
            />

            {/* Movable Sections */}
            {sectionOrder.map((sectionId) => (
                <div key={sectionId}>
                    {sections[sectionId] ?? null}
                </div>
            ))}

        </article>
    );
}