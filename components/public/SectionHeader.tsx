export function SectionHeader({
    eyebrow,
    title,
    description,
    center = false,
}: {
    eyebrow?: string;
    title: string;
    description?: string;
    center?: boolean;
}) {
    return (
        <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
            {eyebrow && (
                <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-amber-600">
                    {eyebrow}
                </p>
            )}
            <h2 className="text-3xl font-black tracking-tight text-blue-950 sm:text-4xl">
                {title}
            </h2>
            {description && (
                <p className="mt-4 text-lg leading-8 text-slate-600">
                    {description}
                </p>
            )}
        </div>
    );
}
