"use client";

const categories = [
    "All",
    "Professional",
    "Minimal",
    "Creative",
    "Technology",
    "Classic",
    "ATS",
];

export default function TemplateFilters({
    activeCategory,
    setActiveCategory,
}) {
    return (
        <div className="overflow-x-auto">
            <div className="flex min-w-max gap-2 py-2">

                {categories.map((category) => {
                    const active = activeCategory === category;

                    return (
                        <button
                            key={category}
                            type="button"
                            onClick={() => setActiveCategory(category)}
                            className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${active
                                    ? "bg-emerald-600 text-white shadow-sm"
                                    : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50 hover:text-slate-900 cursor-pointer"
                                }`}
                        >
                            {category}
                        </button>
                    );
                })}

            </div>
        </div>
    );
}