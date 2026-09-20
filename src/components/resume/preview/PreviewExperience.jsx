export default function PreviewExperience({
    experience,
}) {
    return (
        <div className="space-y-5">

            {experience.map((item) => (
                <div key={item.id}>

                    <div className="flex flex-col justify-between sm:flex-row">

                        <div>

                            <h3 className="font-semibold text-slate-900">
                                {item.jobTitle}
                            </h3>

                            <p className="text-sm font-medium text-slate-600">
                                {item.company}

                                {item.location &&
                                    ` · ${item.location}`}
                            </p>

                        </div>

                        <p className="mt-1 text-sm text-slate-500 sm:mt-0">
                            {item.startDate}

                            {item.startDate && " - "}

                            {item.endDate}
                        </p>

                    </div>

                    {item.description && (
                        <p className="mt-2 text-sm leading-6 text-slate-700">
                            {item.description}
                        </p>
                    )}

                </div>
            ))}

        </div>
    );
}