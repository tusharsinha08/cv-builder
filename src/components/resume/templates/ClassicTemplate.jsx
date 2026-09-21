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
    } = resume;

    return (
        <article
            className="mx-auto box-border flex min-h-[1123px] w-[794px] flex-col overflow-hidden bg-white p-[56px] font-sans text-slate-900"
        >
            {/* Header */}
            <PreviewHeader personal={personal}></PreviewHeader>

            {/* Summary */}
            <PreviewSummary summary={summary}></PreviewSummary>

            {/* Experience */}
            <PreviewExperience experience={experience}></PreviewExperience>

            {/* Education */}
            <PreviewEducation education={education}></PreviewEducation>


            {/* Skills */}
            <PreviewSkills skills={skills}></PreviewSkills>

        </article>
    );
}