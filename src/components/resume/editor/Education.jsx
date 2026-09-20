import Input from "../ui/Input";
import EditorSection from "../ui/EditorSection";

export default function Education({
    education,
    setResume,
}) {
    const updateEducation = (id, field, value) => {
        setResume((prev) => ({
            ...prev,
            education: prev.education.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        [field]: value,
                    }
                    : item
            ),
        }));
    };

    const addEducation = () => {
        setResume((prev) => ({
            ...prev,
            education: [
                ...prev.education,
                {
                    id: Date.now(),
                    degree: "",
                    institution: "",
                    location: "",
                    startDate: "",
                    endDate: "",
                },
            ],
        }));
    };

    const removeEducation = (id) => {
        setResume((prev) => ({
            ...prev,
            education: prev.education.filter(
                (item) => item.id !== id
            ),
        }));
    };

    return (
        <EditorSection
            title="Education"
            description="Add your educational background."
        >

            <div className="space-y-6">

                {education.map((item, index) => (
                    <div
                        key={item.id}
                        className="rounded-xl border border-slate-200 p-5"
                    >

                        <div className="mb-5 flex items-center justify-between">

                            <h3 className="font-medium text-slate-900">
                                Education {index + 1}
                            </h3>

                            <button
                                type="button"
                                onClick={() =>
                                    removeEducation(item.id)
                                }
                                className="text-sm text-red-500"
                            >
                                Remove
                            </button>

                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">

                            <Input
                                label="Degree"
                                value={item.degree}
                                onChange={(value) =>
                                    updateEducation(
                                        item.id,
                                        "degree",
                                        value
                                    )
                                }
                            />

                            <Input
                                label="Institution"
                                value={item.institution}
                                onChange={(value) =>
                                    updateEducation(
                                        item.id,
                                        "institution",
                                        value
                                    )
                                }
                            />

                            <Input
                                label="Location"
                                value={item.location}
                                onChange={(value) =>
                                    updateEducation(
                                        item.id,
                                        "location",
                                        value
                                    )
                                }
                            />

                            <div />

                            <Input
                                label="Start Date"
                                value={item.startDate}
                                onChange={(value) =>
                                    updateEducation(
                                        item.id,
                                        "startDate",
                                        value
                                    )
                                }
                            />

                            <Input
                                label="End Date"
                                value={item.endDate}
                                onChange={(value) =>
                                    updateEducation(
                                        item.id,
                                        "endDate",
                                        value
                                    )
                                }
                            />

                        </div>

                    </div>
                ))}

            </div>

            <button
                type="button"
                onClick={addEducation}
                className="mt-5 rounded-lg border border-emerald-600 px-4 py-2 text-sm font-medium text-emerald-600 hover:bg-emerald-50"
            >
                + Add Education
            </button>

        </EditorSection>
    );
}