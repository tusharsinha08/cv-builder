export default function Hero() {
    return (
        <section className="min-h-screen bg-white">
            <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20 lg:px-8">
                <div className="grid w-full items-center gap-12 lg:grid-cols-2">

                    {/* Hero Content */}
                    <div>
                        <span className="mb-4 inline-block rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-600">
                            AI-Powered Resume Builder
                        </span>

                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                            Create a Professional CV{" "}
                            <span className="text-emerald-600">
                                in Minutes
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                            Build an impressive, job-ready CV with beautiful templates,
                            AI-powered content suggestions, and an easy-to-use resume
                            builder.
                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="/create-resume"
                                className="rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
                            >
                                Create My CV
                            </a>

                            <a
                                href="/templates"
                                className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                            >
                                Browse Templates
                            </a>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-500">
                            <span>✓ Professional Templates</span>
                            <span>✓ AI Assistance</span>
                            <span>✓ PDF Export</span>
                        </div>
                    </div>

                    {/* CV Preview */}
                    <div className="relative">
                        <div className="rounded-2xl bg-gray-100 p-6 shadow-xl">
                            <div className="rounded-lg bg-white p-6 shadow-lg">

                                {/* CV Header */}
                                <div className="border-b border-gray-200 pb-4">
                                    <div className="h-5 w-40 rounded bg-gray-800" />
                                    <div className="mt-2 h-3 w-56 rounded bg-gray-200" />
                                </div>

                                {/* CV Sections */}
                                <div className="mt-6 space-y-6">

                                    {/* Summary */}
                                    <div>
                                        <div className="h-3 w-24 rounded bg-emerald-600" />

                                        <div className="mt-3 space-y-2">
                                            <div className="h-2 w-full rounded bg-gray-200" />
                                            <div className="h-2 w-5/6 rounded bg-gray-200" />
                                            <div className="h-2 w-4/6 rounded bg-gray-200" />
                                        </div>
                                    </div>

                                    {/* Experience */}
                                    <div>
                                        <div className="h-3 w-24 rounded bg-emerald-600" />

                                        <div className="mt-3 space-y-2">
                                            <div className="h-2 w-full rounded bg-gray-200" />
                                            <div className="h-2 w-4/5 rounded bg-gray-200" />
                                            <div className="h-2 w-3/5 rounded bg-gray-200" />
                                        </div>
                                    </div>

                                    {/* Skills */}
                                    <div>
                                        <div className="h-3 w-24 rounded bg-emerald-600" />

                                        <div className="mt-3 flex gap-2">
                                            <div className="h-6 w-16 rounded bg-gray-100" />
                                            <div className="h-6 w-20 rounded bg-gray-100" />
                                            <div className="h-6 w-14 rounded bg-gray-100" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* AI Badge */}
                        <div className="absolute -bottom-4 -left-4 rounded-xl bg-white px-4 py-3 shadow-lg">
                            <p className="text-xs font-medium text-gray-500">
                                Powered by AI
                            </p>

                            <p className="text-sm font-semibold text-emerald-600">
                                Smart Content Suggestions
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

