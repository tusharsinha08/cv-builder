import EditorSection from "../ui/EditorSection";

export default function Skills({
    skills,
    setResume,
}) {
    const updateSkill = (index, value) => {
        setResume((prev) => ({
            ...prev,
            skills: prev.skills.map((skill, i) =>
                i === index ? value : skill
            ),
        }));
    };

    const addSkill = () => {
        setResume((prev) => ({
            ...prev,
            skills: [...prev.skills, ""],
        }));
    };

    const removeSkill = (index) => {
        setResume((prev) => ({
            ...prev,
            skills: prev.skills.filter(
                (_, i) => i !== index
            ),
        }));
    };

    return (
        <EditorSection
            title="Skills"
            description="Add your technical and professional skills."
        >

            <div className="space-y-3">

                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex gap-2"
                    >

                        <input
                            type="text"
                            value={skill}
                            onChange={(e) =>
                                updateSkill(
                                    index,
                                    e.target.value
                                )
                            }
                            placeholder="e.g. Communication"
                            className="flex-1 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition placeholder:text-slate-400 text-slate-700 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                        />

                        <button
                            type="button"
                            onClick={() =>
                                removeSkill(index)
                            }
                            className="px-2 text-sm text-red-500"
                        >
                            Remove
                        </button>

                    </div>
                ))}

            </div>

            <button
                type="button"
                onClick={addSkill}
                className="mt-4 rounded-lg border border-emerald-600 px-4 py-2 text-sm font-medium text-emerald-600 hover:bg-emerald-50"
            >
                + Add Skill
            </button>

        </EditorSection>
    );
}