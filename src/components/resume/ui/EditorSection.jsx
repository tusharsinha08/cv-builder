export default function EditorSection({
    title,
    description,
    children,
}) {
    return (
        <section>
            <div className="mb-5">
                <h2 className="text-lg font-semibold text-slate-900">
                    {title}
                </h2>

                {description && (
                    <p className="mt-1 text-sm text-slate-500">
                        {description}
                    </p>
                )}
            </div>

            {children}
        </section>
    );
}