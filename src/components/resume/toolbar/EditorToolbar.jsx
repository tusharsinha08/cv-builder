"use client";

import Link from "next/link";
import {
    FiEdit3,
    FiLayout,
    FiSliders,
    FiSave,
    FiDownload,
    FiEye,
    FiUser,
} from "react-icons/fi";

const tabs = [
    {
        id: "edit",
        label: "Edit",
        icon: FiEdit3,
    },
    {
        id: "templates",
        label: "Templates",
        icon: FiLayout,
    },
    {
        id: "customize",
        label: "Customize",
        icon: FiSliders,
    },
];

export default function EditorToolbar({
    activeTab,
    setActiveTab,
    onSave,
    onDownload,
    onPreview,
}) {
    return (
        <header className="relative z-50 flex h-16 shrink-0 items-center border-b border-slate-200 bg-white px-4 shadow-sm">

            {/* Left Side */}
            <Link
                href="/"
                className="text-2xl font-bold tracking-tight text-gray-900"
            >
                CV<span className="text-emerald-600">Builder</span>
            </Link>

            {/* Middle Navigation */}
            <nav className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-lg bg-slate-100 p-1">

                {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;

                    return (
                        <button
                            key={tab.id}
                            type="button"
                            onClick={() => setActiveTab(tab.id)}
                            className={`
                                flex items-center gap-2 rounded-md px-4 py-2
                                text-sm font-medium transition
                                ${isActive
                                    ? "bg-white text-emerald-600 shadow-sm"
                                    : "text-slate-600 hover:text-slate-900"
                                }
                            `}
                        >
                            <Icon size={16} />

                            <span className="hidden sm:inline">
                                {tab.label}
                            </span>
                        </button>
                    );
                })}
            </nav>

            {/* Right Side */}
            <div className="ml-auto flex items-center gap-1">

                {/* Mobile Preview */}
                <button
                    type="button"
                    onClick={onPreview}
                    className="
                        flex items-center gap-2 rounded-md px-3 py-2
                        text-sm font-medium text-slate-600
                        hover:bg-slate-100 hover:text-slate-900
                        lg:hidden
                    "
                >
                    <FiEye size={17} />

                    <span className="hidden sm:inline">
                        Preview
                    </span>
                </button>

                {/* Save */}
                <button
                    type="button"
                    onClick={onSave}
                    className="
                        flex items-center gap-2 rounded-md px-3 py-2
                        text-sm font-medium text-slate-600
                        hover:bg-slate-100 hover:text-slate-900
                    "
                >
                    <FiSave size={17} />

                    <span className="hidden sm:inline">
                        Save
                    </span>
                </button>

                {/* Download */}
                <button
                    type="button"
                    onClick={onDownload}
                    className="
                        flex items-center gap-2 rounded-md
                        bg-emerald-600 px-3 py-2
                        text-sm font-medium text-white
                        transition hover:bg-emerald-700
                    "
                >
                    <FiDownload size={17} />

                    <span className="hidden sm:inline">
                        Download
                    </span>
                </button>

                {/* User Profile */}
                <button
                    type="button"
                    className="
                        ml-1 flex h-9 w-9 items-center justify-center
                        rounded-full border border-slate-200
                        bg-slate-50 text-slate-600
                        transition hover:bg-slate-100
                    "
                    aria-label="User profile"
                >
                    <FiUser size={18} />
                </button>

            </div>
        </header>
    );
}