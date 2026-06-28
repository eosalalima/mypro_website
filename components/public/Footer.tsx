import Link from "next/link";
import { company } from "@/lib/content";
import { Logo } from "./Logo";
export function Footer() {
    return (
        <footer className="bg-blue-950 text-white">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
                <div className="md:col-span-2">
                    <Logo />
                    <p className="mt-5 max-w-xl text-blue-100">
                        {company.description}
                    </p>
                </div>
                <div>
                    <h3 className="font-bold text-amber-300">Explore</h3>
                    <div className="mt-4 grid gap-2 text-sm text-blue-100">
                        {[
                            "About",
                            "Solutions",
                            "Expertise",
                            "Products",
                            "Projects",
                            "Insights",
                            "Contact",
                        ].map((x) => (
                            <Link
                                key={x}
                                href={
                                    x === "Insights"
                                        ? "/blog"
                                        : "/" + x.toLowerCase()
                                }
                            >
                                {x}
                            </Link>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="font-bold text-amber-300">Contact</h3>
                    <p className="mt-4 text-sm text-blue-100">
                        {company.email}
                    </p>
                    {company.phoneNumbers.map((p) => (
                        <p className="text-sm text-blue-100" key={p}>
                            {p}
                        </p>
                    ))}
                    <p className="text-sm text-blue-100">{company.website}</p>
                </div>
            </div>
            <div className="border-t border-white/10 py-5 text-center text-sm text-blue-100">
                © 2026 {company.companyName}. All rights reserved.
            </div>
        </footer>
    );
}
