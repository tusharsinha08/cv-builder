"use client";

export default function CustomizePanel({
    resume,
    setResume,
}) {
    return (
        <div className="mx-auto max-w-4xl p-6">

            <div className="mb-6">
                <h1 className="text-xl font-semibold text-slate-900">
                    Customize
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                    Customize the appearance of your resume.
                </p>
            </div>

            <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">

                <h2 className="font-medium text-slate-800">
                    Customization options
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                    Customize controls will be added here.
                </p>

            </div>

        </div>
    );
}