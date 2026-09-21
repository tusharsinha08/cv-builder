"use client";

import { useMemo, useState } from "react";
import TemplateCard from "@/components/cv-templates/TemplateCard";
import TemplateFilters from "@/components/cv-templates/TemplateFilters";
import { templates } from "@/components/cv-templates/templates";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { CiSearch } from "react-icons/ci";



export default function CVTemplatesPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [search, setSearch] = useState("");

    const filteredTemplates = useMemo(() => {
        return templates.filter((template) => {
            const matchesCategory =
                activeCategory === "All" ||
                template.category === activeCategory;

            const searchTerm = search.toLowerCase().trim();

            const matchesSearch =
                !searchTerm ||
                template.name.toLowerCase().includes(searchTerm) ||
                template.category.toLowerCase().includes(searchTerm) ||
                template.description.toLowerCase().includes(searchTerm);

            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, search]);

    return (
        <main className="min-h-screen bg-slate-50">

            {/* Hero */}
            <section className="border-b border-slate-200 bg-white">
                <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2">
                        <Link
                            href="/"
                            className="text-sm text-slate-500 hover:text-slate-700"
                        >
                            Home
                        </Link>

                        <MdKeyboardDoubleArrowRight className="text-slate-500" />

                        <Link
                            href="/cv-templates"
                            className="text-sm text-slate-500 hover:text-slate-700"
                        >
                            CV Templates
                        </Link>
                    </div>

                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                            Choose a CV template
                            <span className="block text-emerald-600">
                                that gets you noticed.
                            </span>
                        </h1>

                        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                            Start with a professionally designed template and
                            customize it with your experience, skills, and
                            achievements.
                        </p>

                    </div>

                </div>

            </section>

            {/* Templates */}
            <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

                {/* Search + Filter */}
                <div className="mb-10 space-y-5">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                        <div>
                            <h2 className="text-xl font-bold text-slate-900">
                                CV Templates
                            </h2>

                            <p className="mt-1 text-sm text-slate-500">
                                {filteredTemplates.length} templates available
                            </p>
                        </div>

                        {/* Search */}
                        <div className="relative w-full lg:w-80">

                            <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl"></CiSearch>

                            <input
                                type="search"
                                value={search}
                                onChange={(event) =>
                                    setSearch(event.target.value)
                                }
                                placeholder="Search templates..."
                                className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                            />

                        </div>

                    </div>

                    <TemplateFilters
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                    />

                </div>

                {/* Template Grid */}
                {filteredTemplates.length > 0 ? (
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredTemplates.map((template) => (
                            <TemplateCard
                                key={template.id}
                                template={template}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">

                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                            <CiSearch className="text-slate-400 text-2xl"></CiSearch>
                        </div>

                        <h3 className="mt-4 text-lg font-semibold text-slate-900">
                            No templates found
                        </h3>

                        <p className="mt-2 text-sm text-slate-500">
                            Try another search term or category.
                        </p>

                        <button
                            type="button"
                            onClick={() => {
                                setSearch("");
                                setActiveCategory("All");
                            }}
                            className="mt-5 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
                        >
                            Clear Filters
                        </button>

                    </div>
                )}

            </section>

            {/* Bottom CTA */}
            <section className="border-t border-slate-200 bg-white">

                <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">

                    <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                        Not sure which template to choose?
                    </h2>

                    <p className="mx-auto mt-3 max-w-2xl text-slate-600">
                        Choose a clean professional template. You can customize
                        colors, sections, fonts, and content later.
                    </p>

                </div>

            </section>

        </main>
    );
}