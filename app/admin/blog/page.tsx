import { AdminLayout } from "@/components/admin/AdminLayout";
import { AdminManager } from "@/components/admin/AdminManager";
import { cmsCollections } from "@/lib/content";
export default function Page() {
    return (
        <AdminLayout title="Blog">
            <AdminManager
                storageKey="mypro-blog"
                initial={cmsCollections.blog}
                title="Blog"
            />
        </AdminLayout>
    );
}
