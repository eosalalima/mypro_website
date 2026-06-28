import { AdminLayout } from "@/components/admin/AdminLayout";import { AdminManager } from "@/components/admin/AdminManager";import { cmsCollections } from "@/lib/content";
export default function Page(){return <AdminLayout title="Testimonials"><AdminManager storageKey="mypro-testimonials" initial={cmsCollections.testimonials} title="Testimonials"/></AdminLayout>}
