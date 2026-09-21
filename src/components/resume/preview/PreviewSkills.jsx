export default function PreviewSkills({
    skills,
}) {

    return (
        <div className="flex flex-wrap gap-x-2 text-sm text-slate-700">
            
            {skills.length > 0 && (
                <section className="mt-6">
                    <h2 className="border-b border-slate-300 pb-1 text-sm font-bold uppercase tracking-widest">
                        Skills
                    </h2>

                    <div className="mt-3 flex flex-wrap gap-x-2 gap-y-1">
                        {skills.map((skill, index) => (
                            <span
                                key={`${skill}-${index}`}
                                className="text-sm text-slate-700"
                            >
                                {skill}
                                {index < skills.length - 1 && " • "}
                            </span>
                        ))}
                    </div>
                </section>
            )}

        </div>
    );
}