import { AdminLayout } from "@/components/admin/AdminLayout";import { AdminManager } from "@/components/admin/AdminManager";import { cmsCollections } from "@/lib/content";
export default function Page(){return <AdminLayout title="Services"><AdminManager storageKey="mypro-services" initial={cmsCollections.services} title="Services"/></AdminLayout>}
