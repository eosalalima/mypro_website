import { PageShell } from "@/components/public/PageShell";
import { SectionHeader } from "@/components/public/SectionHeader";
import { BlogCard } from "@/components/public/Cards";
import { blogPosts } from "@/lib/content";
export default function Blog() {
    return (
        <PageShell>
            <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <SectionHeader
                        eyebrow="Insights"
                        title="IT guidance and company updates"
                        description="A CMS-managed blog area for practical technology topics and news."
                    />
                    <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {blogPosts.map((p) => (
                            <BlogCard key={p.slug} item={p} />
                        ))}
                    </div>
                </div>
            </section>
        </PageShell>
    );
}
