import Textarea from "../ui/Textarea";
import EditorSection from "../ui/EditorSection";

export default function Summary({
    summary,
    setResume,
}) {
    return (
        <EditorSection
            title="Professional Summary"
            description="Write a short professional introduction."
        >
            <Textarea
                label="Summary"
                rows={6}
                value={summary}
                placeholder="Write your professional summary..."
                onChange={(value) =>
                    setResume((prev) => ({
                        ...prev,
                        summary: value,
                    }))
                }
            />
        </EditorSection>
    );
}