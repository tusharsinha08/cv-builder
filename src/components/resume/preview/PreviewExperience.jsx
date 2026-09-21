export default function PreviewExperience({
    experience,
}) {
    return (
        <div className="space-y-5">

            {experience.length > 0 && (
                <section className="mt-6">
                    <h2 className="border-b border-slate-300 pb-1 text-sm font-bold uppercase tracking-widest">
                        Experience
                    </h2>

                    <div className="mt-4 space-y-5">
                        {experience.map((item, index) => (
                            <div
                                key={item.id ?? `experience-${index}`}
                                className="break-inside-avoid"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="min-w-0">
                                        <h3 className="break-words font-semibold">
                                            {item.jobTitle}
                                        </h3>

                                        <p className="text-sm text-slate-600">
                                            {item.company}
                                        </p>

                                        {item.location && (
                                            <p className="text-sm text-slate-500">
                                                {item.location}
                                            </p>
                                        )}
                                    </div>

                                    <p className="shrink-0 whitespace-nowrap text-sm text-slate-500">
                                        {item.startDate} - {item.endDate}
                                    </p>
                                </div>

                                {item.description && (
                                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed">
                                        {Array.isArray(item.description) ? (
                                            item.description.map((point, index) => (
                                                <li key={index}>{point}</li>
                                            ))
                                        ) : (
                                            <li>{item.description}</li>
                                        )}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

        </div>
    );
}