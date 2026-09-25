import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import EditorSection from "./EditorSection";

export default function Experience({
    experience,
    setResume,
}) {
    const updateExperience = (id, field, value) => {
        setResume((prev) => ({
            ...prev,
            experience: prev.experience.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        [field]: value,
                    }
                    : item
            ),
        }));
    };

    const addExperience = () => {
        setResume((prev) => ({
            ...prev,
            experience: [
                ...prev.experience,
                {
                    id: Date.now(),
                    jobTitle: "",
                    company: "",
                    location: "",
                    startDate: "",
                    endDate: "",
                    description: "",
                },
            ],
        }));
    };

    const removeExperience = (id) => {
        setResume((prev) => ({
            ...prev,
            experience: prev.experience.filter(
                (item) => item.id !== id
            ),
        }));
    };

    return (
        <EditorSection
            id="experience"
            title="Work Experience"
            description="Add your relevant professional experience."
            isSortable
        >

            <div className="space-y-6">

                {experience.map((item, index) => (
                    <div
                        key={item.id}
                        className="rounded-xl border border-slate-200 p-5"
                    >

                        <div className="mb-5 flex items-center justify-between">

                            <h3 className="font-medium text-slate-900">
                                Experience {index + 1}
                            </h3>

                            <button
                                type="button"
                                onClick={() =>
                                    removeExperience(item.id)
                                }
                                className="text-sm text-red-500 hover:text-red-600"
                            >
                                Remove
                            </button>

                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">

                            <Input
                                label="Job Title"
                                placeholder="e.g. Software Engineer"
                                value={item.jobTitle}
                                onChange={(value) =>
                                    updateExperience(
                                        item.id,
                                        "jobTitle",
                                        value
                                    )
                                }
                            />

                            <Input
                                label="Company"
                                placeholder="e.g. XYZ Corp"
                                value={item.company}
                                onChange={(value) =>
                                    updateExperience(
                                        item.id,
                                        "company",
                                        value
                                    )
                                }
                            />

                            <Input
                                label="Location"
                                placeholder="e.g. New York, USA"
                                value={item.location}
                                onChange={(value) =>
                                    updateExperience(
                                        item.id,
                                        "location",
                                        value
                                    )
                                }
                            />

                            <div />

                            <Input
                                label="Start Date"
                                placeholder="e.g. Jan 2020"
                                value={item.startDate}
                                onChange={(value) =>
                                    updateExperience(
                                        item.id,
                                        "startDate",
                                        value
                                    )
                                }
                            />

                            <Input
                                label="End Date"
                                placeholder="e.g. Dec 2022"
                                value={item.endDate}
                                onChange={(value) =>
                                    updateExperience(
                                        item.id,
                                        "endDate",
                                        value
                                    )
                                }
                            />

                        </div>

                        <div className="mt-4">

                            <Textarea
                                label="Description"
                                placeholder="e.g. Led a team of developers to build a web application."
                                rows={5}
                                value={item.description}
                                onChange={(value) =>
                                    updateExperience(
                                        item.id,
                                        "description",
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
                onClick={addExperience}
                className="mt-5 rounded-lg border border-emerald-600 px-4 py-2 text-sm font-medium text-emerald-600 hover:bg-emerald-50"
            >
                + Add Experience
            </button>

        </EditorSection>
    );
}