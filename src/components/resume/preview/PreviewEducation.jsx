export default function PreviewEducation({
    education,
}) {
    return (
        <div className="space-y-4">

            {education.length > 0 && (
                <section className="mt-6">
                    <h2 className="border-b border-slate-300 pb-1 text-sm font-bold uppercase tracking-widest">
                        Education
                    </h2>

                    <div className="mt-4 space-y-4">
                        {education.map((item, index) => (
                            <div
                                key={item.id ?? `education-${index}`}
                                className="break-inside-avoid flex justify-between"
                            >
                                <div>
                                    <h3 className="font-semibold">
                                        {item.degree}
                                    </h3>

                                    <p className="text-sm text-slate-600">
                                        {item.institution}
                                    </p>

                                    {item.location && (
                                        <p className="text-sm text-slate-500">
                                            {item.location}
                                        </p>
                                    )}
                                </div>


                                <p className="text-sm text-slate-500">
                                    {item.startDate} - {item.endDate}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

        </div>
    );
}