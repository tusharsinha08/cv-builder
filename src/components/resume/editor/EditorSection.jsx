"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { MdDragIndicator } from "react-icons/md";

export default function EditorSection({
    id,
    title,
    description,
    children,
    isSortable = false,
}) {
    const sortable = useSortable({
        id,
        disabled: !isSortable,
    });

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = sortable;

    const style = isSortable
        ? {
            transform: CSS.Transform.toString(transform),
            transition,
        }
        : undefined;

    return (
        <section
            ref={isSortable ? setNodeRef : undefined}
            style={style}
            className={ `p-4 border rounded-lg bg-white
                isDragging
                    ? "relative z-50 opacity-70"
                    : "relative"
            `}
        >
            {/* Section Header */}
            <div className="mb-4 flex items-start justify-between gap-4">

                <div>
                    <h2 className="text-lg font-semibold text-slate-900">
                        {title}
                    </h2>

                    {description && (
                        <p className="mt-1 text-sm text-slate-500">
                            {description}
                        </p>
                    )}
                </div>

                {/* Drag Handle */}
                {isSortable && (
                    <button
                        type="button"
                        {...attributes}
                        {...listeners}
                        className="mt-0.5 shrink-0 cursor-grab touch-none rounded-md p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 active:cursor-grabbing"
                        aria-label={`Move ${title} section`}
                        title={`Move ${title} section`}
                    >
                        <MdDragIndicator className="h-5 w-5" />
                    </button>
                )}

            </div>

            {children}
        </section>
    );
}