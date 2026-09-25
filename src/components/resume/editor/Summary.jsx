import Textarea from "../ui/Textarea";
import EditorSection from "./EditorSection";

export default function Summary({
    summary,
    setResume,
}) {
    return (
        <EditorSection
            id="summary"
            title="Professional Summary"
            description="Write a short summary that highlights your professional background."
            isSortable={true}
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