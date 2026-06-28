"use client";
import Link from "next/link";
import { useState } from "react";
const items = [
    ["Dashboard", "/admin"],
    ["Company", "/admin/company"],
    ["Services", "/admin/services"],
    ["Expertise", "/admin/expertise"],
    ["Products", "/admin/products"],
    ["Projects", "/admin/projects"],
    ["Blog", "/admin/blog"],
    ["Testimonials", "/admin/testimonials"],
    ["Settings", "/admin/settings"],
];
export function AdminLayout({
    children,
    title,
}: {
    children: React.ReactNode;
    title: string;
}) {
    const [authed, setAuthed] = useState(false);
    return (
        <div className="min-h-screen bg-slate-100 text-slate-900">
            {!authed ? (
                <div className="grid min-h-screen place-items-center p-6">
                    <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-sm">
                        <h1 className="text-2xl font-black text-blue-950">
                            MyPro CMS
                        </h1>
                        <p className="mt-2 text-slate-600">
                            Mock authentication for the first working version.
                            Click continue to manage local CMS content.
                        </p>
                        <button
                            className="mt-6 w-full rounded-full bg-blue-900 px-5 py-3 font-black text-white"
                            onClick={() => setAuthed(true)}
                        >
                            Continue as Admin
                        </button>
                        <Link
                            className="mt-4 block text-center text-sm font-bold text-blue-900"
                            href="/"
                        >
                            Back to website
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="flex min-h-screen">
                    <aside className="hidden w-72 bg-blue-950 p-6 text-white md:block">
                        <h2 className="text-xl font-black">MyPro CMS</h2>
                        <nav className="mt-8 grid gap-2">
                            {items.map(([l, h]) => (
                                <Link
                                    className="rounded-xl px-4 py-3 text-blue-100 hover:bg-white/10 hover:text-white"
                                    href={h}
                                    key={h}
                                >
                                    {l}
                                </Link>
                            ))}
                        </nav>
                    </aside>
                    <main className="flex-1">
                        <header className="border-b bg-white px-5 py-4">
                            <div className="flex items-center justify-between">
                                <h1 className="text-2xl font-black text-blue-950">
                                    {title}
                                </h1>
                                <Link
                                    className="font-bold text-blue-900"
                                    href="/"
                                >
                                    View site
                                </Link>
                            </div>
                            <nav className="mt-4 flex gap-3 overflow-x-auto md:hidden">
                                {items.map(([l, h]) => (
                                    <Link
                                        className="rounded-full bg-slate-100 px-3 py-2 text-sm font-bold"
                                        href={h}
                                        key={h}
                                    >
                                        {l}
                                    </Link>
                                ))}
                            </nav>
                        </header>
                        <div className="p-5">{children}</div>
                    </main>
                </div>
            )}
        </div>
    );
}
export function DashboardCard({
    label,
    value,
}: {
    label: string;
    value: string | number;
}) {
    return (
        <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-wider text-amber-600">
                {label}
            </p>
            <p className="mt-3 text-4xl font-black text-blue-950">{value}</p>
        </div>
    );
}
