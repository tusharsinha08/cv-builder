export default function Input({
    label,
    value,
    onChange,
    type = "text",
    placeholder = "",
}) {
    return (
        <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
                {label}
            </label>

            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition placeholder:text-slate-400 text-slate-700 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
            />
        </div>
    );
}