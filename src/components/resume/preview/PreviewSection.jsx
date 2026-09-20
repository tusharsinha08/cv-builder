export default function PreviewSection({
    title,
    children,
}) {
    return (
        <section className="mt-6">

            <h2 className="mb-3 border-b border-slate-300 pb-1.5 text-sm font-bold uppercase tracking-wider text-slate-900">
                {title}
            </h2>

            {children}

        </section>
    );
}