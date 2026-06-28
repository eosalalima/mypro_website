import Link from "next/link";
import type {
    Service,
    Expertise,
    ProductLine,
    Project,
    BlogPost,
    Testimonial,
} from "@/lib/content";
export function ServiceCard({ item }: { item: Service }) {
    return (
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-2xl text-blue-900">
                {item.icon}
            </div>
            <h3 className="text-xl font-black text-blue-950">{item.title}</h3>
            <p className="mt-3 text-slate-600">{item.shortDescription}</p>
            <ul className="mt-5 grid gap-2 text-sm text-slate-700">
                {item.benefits.slice(0, 4).map((b) => (
                    <li key={b}>✓ {b}</li>
                ))}
            </ul>
        </article>
    );
}
export function ExpertiseCard({ item }: { item: Expertise }) {
    return (
        <article className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-600">
                {item.category}
            </p>
            <h3 className="mt-2 font-black text-blue-950">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{item.description}</p>
        </article>
    );
}
export function BrandLogoGrid({ brands }: { brands: string[] }) {
    return (
        <div className="mt-5 flex flex-wrap gap-2">
            {brands.map((b) => (
                <span
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-semibold text-slate-700"
                    key={b}
                >
                    {b}
                </span>
            ))}
        </div>
    );
}
export function ProductLineCard({ item }: { item: ProductLine }) {
    return (
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 grid h-24 place-items-center rounded-2xl bg-gradient-to-br from-blue-950 to-blue-800 text-sm font-black uppercase tracking-widest text-amber-300">
                Logo Placeholder
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-amber-600">
                {item.category}
            </p>
            <h3 className="mt-2 text-xl font-black text-blue-950">
                {item.title}
            </h3>
            <p className="mt-3 text-slate-600">{item.description}</p>
            <BrandLogoGrid brands={item.partnerBrands} />
        </article>
    );
}
export function ProjectCard({ item }: { item: Project }) {
    return (
        <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="grid h-44 place-items-center bg-slate-100 text-sm font-bold text-slate-500">
                {item.image}
            </div>
            <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-600">
                    {item.category} · {item.clientType}
                </p>
                <h3 className="mt-2 text-xl font-black text-blue-950">
                    {item.title}
                </h3>
                <p className="mt-3 text-slate-600">{item.description}</p>
                <p className="mt-4 text-sm text-slate-700">
                    <b>Result:</b> {item.result}
                </p>
            </div>
        </article>
    );
}
export function BlogCard({ item }: { item: BlogPost }) {
    return (
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold text-amber-600">
                {item.category} · {item.publishedDate}
            </p>
            <h3 className="mt-3 text-xl font-black text-blue-950">
                {item.title}
            </h3>
            <p className="mt-3 text-slate-600">{item.summary}</p>
            <Link
                className="mt-5 inline-block font-bold text-blue-900"
                href="/blog"
            >
                Read insight →
            </Link>
        </article>
    );
}
export function TestimonialCard({ item }: { item: Testimonial }) {
    return (
        <article className="rounded-3xl bg-blue-950 p-6 text-white">
            <p className="text-amber-300">{"★".repeat(item.rating)}</p>
            <p className="mt-4 text-blue-50">“{item.message}”</p>
            <p className="mt-5 font-bold">{item.clientName}</p>
            <p className="text-sm text-blue-200">
                {item.clientPosition}, {item.company}
            </p>
        </article>
    );
}
