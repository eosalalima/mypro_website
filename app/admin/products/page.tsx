import { AdminLayout } from "@/components/admin/AdminLayout";
import { AdminManager } from "@/components/admin/AdminManager";
import { cmsCollections } from "@/lib/content";
export default function Page() {
    return (
        <AdminLayout title="Products">
            <AdminManager
                storageKey="mypro-products"
                initial={cmsCollections.products}
                title="Products"
            />
        </AdminLayout>
    );
}
