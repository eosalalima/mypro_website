import { AdminLayout } from "@/components/admin/AdminLayout";import { AdminManager } from "@/components/admin/AdminManager";import { cmsCollections } from "@/lib/content";
export default function Page(){return <AdminLayout title="Company"><AdminManager storageKey="mypro-company" initial={cmsCollections.company} title="Company"/></AdminLayout>}
