import { PageShell } from "@/components/public/PageShell";
import { SectionHeader } from "@/components/public/SectionHeader";
import { ProjectCard } from "@/components/public/Cards";
import { projects } from "@/lib/content";
export default function Projects() {
    return (
        <PageShell>
            <section className="px-4 py-20 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <SectionHeader
                        eyebrow="Portfolio"
                        title="CMS-ready project placeholders"
                        description="These sample entries demonstrate how project case studies can be presented once approved customer stories are available."
                    />
                    <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((p) => (
                            <ProjectCard key={p.slug} item={p} />
                        ))}
                    </div>
                </div>
            </section>
        </PageShell>
    );
}
