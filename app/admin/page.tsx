import { AdminLayout, DashboardCard } from "@/components/admin/AdminLayout";
import {
    blogPosts,
    company,
    expertise,
    productLines,
    projects,
    services,
    testimonials,
} from "@/lib/content";
export default function Admin() {
    return (
        <AdminLayout title="Dashboard">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <DashboardCard label="Company profiles" value={1} />
                <DashboardCard label="Services" value={services.length} />
                <DashboardCard label="Expertise" value={expertise.length} />
                <DashboardCard label="Products" value={productLines.length} />
                <DashboardCard label="Projects" value={projects.length} />
                <DashboardCard label="Blog posts" value={blogPosts.length} />
                <DashboardCard
                    label="Testimonials"
                    value={testimonials.length}
                />
                <DashboardCard label="Brand" value={company.brandName} />
            </div>
            <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
                <h2 className="text-xl font-black text-blue-950">CMS status</h2>
                <p className="mt-3 text-slate-600">
                    This lightweight CMS uses mock authentication and local
                    browser storage. It is ready for content review and can
                    later be connected to a database or headless CMS.
                </p>
            </div>
        </AdminLayout>
    );
}
