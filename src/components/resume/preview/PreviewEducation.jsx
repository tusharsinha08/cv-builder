export default function PreviewEducation({
    education,
}) {
    return (
        <div className="space-y-4">

            {education.map((item) => (
                <div key={item.id}>

                    <div className="flex flex-col justify-between sm:flex-row">

                        <div>

                            <h3 className="font-semibold text-slate-900">
                                {item.degree}
                            </h3>

                            <p className="text-sm text-slate-600">
                                {item.institution}

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

                </div>
            ))}

        </div>
    );
}