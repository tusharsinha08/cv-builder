import Input from "../ui/Input";
import EditorSection from "../ui/EditorSection";

export default function PersonalInfo({
    personal,
    setResume,
}) {
    const updateField = (field, value) => {
        setResume((prev) => ({
            ...prev,
            personal: {
                ...prev.personal,
                [field]: value,
            },
        }));
    };

    return (
        <EditorSection
            title="Personal Information"
            description="Basic information that appears on your resume."
        >
            <div className="grid gap-4 sm:grid-cols-2">

                <Input
                    label="Full Name"
                    value={personal.fullName}
                    onChange={(value) =>
                        updateField("fullName", value)
                    }
                />

                <Input
                    label="Job Title"
                    value={personal.jobTitle}
                    onChange={(value) =>
                        updateField("jobTitle", value)
                    }
                />

                <Input
                    label="Email"
                    type="email"
                    value={personal.email}
                    onChange={(value) =>
                        updateField("email", value)
                    }
                />

                <Input
                    label="Phone"
                    value={personal.phone}
                    onChange={(value) =>
                        updateField("phone", value)
                    }
                />

                <Input
                    label="Location"
                    value={personal.location}
                    onChange={(value) =>
                        updateField("location", value)
                    }
                />

                <Input
                    label="Website"
                    value={personal.website}
                    onChange={(value) =>
                        updateField("website", value)
                    }
                />

                <Input
                    label="LinkedIn"
                    value={personal.linkedin}
                    onChange={(value) =>
                        updateField("linkedin", value)
                    }
                />

            </div>
        </EditorSection>
    );
}