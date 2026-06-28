import { PageShell } from "@/components/public/PageShell";
import { SectionHeader } from "@/components/public/SectionHeader";
import { ProductLineCard } from "@/components/public/Cards";
import { productLines } from "@/lib/content";
export default function Products() {
    return (
        <PageShell>
            <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <SectionHeader
                        eyebrow="Product lines and partners"
                        title="Partner-backed solution categories"
                        description="Logo placeholders are used for partner and brand references unless approved assets are added to the repository."
                    />
                </div>
            </section>
            <section className="px-4 py-20 sm:px-6 lg:px-8">
                <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {productLines.map((p) => (
                        <ProductLineCard key={p.slug} item={p} />
                    ))}
                </div>
            </section>
        </PageShell>
    );
}
