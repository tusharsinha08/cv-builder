export default function PreviewSkills({
    skills,
}) {
    const validSkills = skills.filter(Boolean);

    return (
        <div className="flex flex-wrap gap-x-2 text-sm text-slate-700">

            {validSkills.map((skill, index) => (
                <span key={index}>
                    {skill}

                    {index < validSkills.length - 1 && " • "}
                </span>
            ))}

        </div>
    );
}