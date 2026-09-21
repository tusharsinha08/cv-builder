export default function PreviewSummary({
    summary,
}) {

    return (
        <div className="flex flex-wrap gap-x-2 text-sm text-slate-700">
           
            {summary && (
                <section className="mt-6">
                    <h2 className="border-b border-slate-300 pb-1 text-sm font-bold uppercase tracking-widest">
                        Professional Summary
                    </h2>

                    <p className="mt-3 whitespace-pre-line text-sm leading-6 text-slate-700">
                        {summary}
                    </p>
                </section>
            )}
        </div>
    )
}