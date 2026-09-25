import Input from "../ui/Input";
import EditorSection from "./EditorSection";

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
            id="personal"
            title="Personal Information"
            description="Add your contact details and basic information."
            isSortable={false}
        >
            <div className="grid gap-4 sm:grid-cols-2">

                <Input
                    label="Full Name"
                    placeholder="e.g. Tushar Sinha"
                    value={personal.fullName}
                    onChange={(value) =>
                        updateField("fullName", value)
                    }
                />

                <Input
                    label="Job Title"
                    placeholder="e.g. Software Engineer"
                    value={personal.jobTitle}
                    onChange={(value) =>
                        updateField("jobTitle", value)
                    }
                />

                <Input
                    label="Email"
                    placeholder="e.g. tushar@example.com"
                    type="email"
                    value={personal.email}
                    onChange={(value) =>
                        updateField("email", value)
                    }
                />

                <Input
                    label="Phone"
                    placeholder="e.g. +880 12345-6789"
                    value={personal.phone}
                    onChange={(value) =>
                        updateField("phone", value)
                    }
                />

                <Input
                    label="Location"
                    placeholder="e.g. Dhaka, Bangladesh"
                    value={personal.location}
                    onChange={(value) =>
                        updateField("location", value)
                    }
                />

                <Input
                    label="Website"
                    placeholder="e.g. https://tusharsinha.com"
                    value={personal.website}
                    onChange={(value) =>
                        updateField("website", value)
                    }
                />

                <Input
                    label="LinkedIn"
                    placeholder="e.g. https://linkedin.com/in/username"
                    value={personal.linkedin}
                    onChange={(value) =>
                        updateField("linkedin", value)
                    }
                />

            </div>
        </EditorSection>
    );
}