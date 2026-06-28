import { AdminLayout } from "@/components/admin/AdminLayout";
export default function Settings() {
    return (
        <AdminLayout title="Settings">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
                <h2 className="text-xl font-black text-blue-950">
                    CMS Settings
                </h2>
                <p className="mt-3 text-slate-600">
                    Mock authentication is enabled for this first version.
                    Future settings can include user roles, publishing
                    workflows, storage providers, analytics, and SEO defaults.
                </p>
                <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                    <p className="font-bold">
                        Status: Local JSON seed data + browser localStorage
                        editing
                    </p>
                    <p className="mt-2 text-sm text-slate-600">
                        No external APIs or complex authentication were
                        introduced.
                    </p>
                </div>
            </div>
        </AdminLayout>
    );
}
