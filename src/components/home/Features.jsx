const features = [
    {
        icon: "✨",
        title: "AI-Powered",
        description:
            "Generate professional summaries, experience descriptions, and skills with AI.",
    },
    {
        icon: "🎨",
        title: "Beautiful Templates",
        description:
            "Choose from professionally designed CV templates for different careers.",
    },
    {
        icon: "✏️",
        title: "Easy to Edit",
        description:
            "Create and update your resume using our simple step-by-step builder.",
    },
    {
        icon: "📄",
        title: "Export to PDF",
        description:
            "Download your finished CV as a professional PDF whenever you need it.",
    },
];

export default function Features() {
    return (
        <section className="bg-gray-50 py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Section Header */}
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Everything You Need to Build a Great CV
                    </h2>

                    <p className="mt-4 text-lg text-gray-600">
                        Powerful tools designed to help you create a professional resume
                        quickly and easily.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                        >
                            <div className="text-3xl">
                                {feature.icon}
                            </div>

                            <h3 className="mt-4 text-lg font-semibold text-gray-900">
                                {feature.title}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
