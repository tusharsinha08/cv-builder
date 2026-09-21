export default function PreviewHeader({
    personal,
}) {
    return (
        <header className="border-b text-center border-slate-300 pb-5">

            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                {personal.fullName}
            </h1>

            <p className="mt-1 text-lg font-medium text-slate-600">
                {personal.jobTitle}
            </p>

            <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-slate-600">

                {personal.email && (
                    <span>{personal.email}</span>
                )}

                {personal.phone && (
                    <span>{personal.phone}</span>
                )}

                {personal.location && (
                    <span>{personal.location}</span>
                )}

                {personal.website && (
                    <span>{personal.website}</span>
                )}

                {personal.linkedin && (
                    <span>{personal.linkedin}</span>
                )}

            </div>

        </header>
    );
}