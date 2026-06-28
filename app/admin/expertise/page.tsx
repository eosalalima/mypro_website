import { AdminLayout } from "@/components/admin/AdminLayout";import { AdminManager } from "@/components/admin/AdminManager";import { cmsCollections } from "@/lib/content";
export default function Page(){return <AdminLayout title="Expertise"><AdminManager storageKey="mypro-expertise" initial={cmsCollections.expertise} title="Expertise"/></AdminLayout>}
