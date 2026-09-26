"use client";

import {
    DndContext,
    closestCenter,
    PointerSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";

import {
    SortableContext,
    verticalListSortingStrategy,
    arrayMove,
} from "@dnd-kit/sortable";

import PersonalInfo from "./PersonalInfo";
import Summary from "./Summary";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import EditorSection from "./EditorSection";

const DEFAULT_SECTION_ORDER = [
    "summary",
    "experience",
    "education",
    "skills",
];

export default function ResumeForm({
    resume,
    setResume,
    onPreview,
}) {
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8,
            },
        })
    );

    const sectionOrder = (
        resume.sectionOrder ?? DEFAULT_SECTION_ORDER
    ).filter(
        (sectionId) => sectionId !== "personal"
    );

    function handleDragEnd(event) {
        const { active, over } = event;

        if (!over || active.id === over.id) {
            return;
        }

        setResume((currentResume) => {
            const currentOrder = (
                currentResume.sectionOrder ??
                DEFAULT_SECTION_ORDER
            ).filter(
                (sectionId) => sectionId !== "personal"
            );

            const oldIndex = currentOrder.indexOf(active.id);
            const newIndex = currentOrder.indexOf(over.id);

            if (
                oldIndex === -1 ||
                newIndex === -1
            ) {
                return currentResume;
            }

            return {
                ...currentResume,
                sectionOrder: arrayMove(
                    currentOrder,
                    oldIndex,
                    newIndex
                ),
            };
        });
    }

    function renderSection(sectionId) {
        switch (sectionId) {
            case "summary":
                return (
                    <Summary
                        summary={resume.summary}
                        setResume={setResume}
                    />
                );

            case "experience":
                return (
                    <Experience
                        experience={resume.experience}
                        setResume={setResume}
                    />
                );

            case "education":
                return (
                    <Education
                        education={resume.education}
                        setResume={setResume}
                    />
                );

            case "skills":
                return (
                    <Skills
                        skills={resume.skills}
                        setResume={setResume}
                    />
                );

            default:
                return null;
        }
    }

    return (
        <div>

            {/* Editor Header */}
            {/* <div className="sticky top-0 z-20 border-b border-slate-200 bg-white px-6 py-5"> */}
                    {/* <button
                        type="button"
                        onClick={onPreview}
                        className="shrink-0 rounded-lg bg-emerald-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-emerald-700 lg:hidden"
                    >
                        Preview
                    </button> */}
            {/* </div> */}

            <div className="bg-slate-100">

                {/* Fixed Section */}
                <div className="mb-1">
                    <PersonalInfo
                        personal={resume.personal}
                        setResume={setResume}
                    />
                </div>

                {/* Sortable Sections */}
                <DndContext
                    id="resume-editor-dnd"
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                >
                    <SortableContext
                        items={sectionOrder}
                        strategy={verticalListSortingStrategy}
                    >
                        <div className="space-y-1">
                            {sectionOrder.map((sectionId) => (
                                <div key={sectionId}>
                                    {renderSection(sectionId)}
                                </div>
                            ))}
                        </div>
                    </SortableContext>
                </DndContext>

            </div>
        </div>
    );
}