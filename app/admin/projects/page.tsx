import { AdminLayout } from "@/components/admin/AdminLayout";
import { AdminManager } from "@/components/admin/AdminManager";
import { cmsCollections } from "@/lib/content";
export default function Page() {
    return (
        <AdminLayout title="Projects">
            <AdminManager
                storageKey="mypro-projects"
                initial={cmsCollections.projects}
                title="Projects"
            />
        </AdminLayout>
    );
}
