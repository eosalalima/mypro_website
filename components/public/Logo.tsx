import Link from "next/link";
import Image from "next/image";
export function Logo() {
    return (
        <Link href="/" className="flex items-center gap-3">
            <span className="grid h-11 w-21 place-items-center rounded-xl bg-white-900 text-sm font-black text-amber-300 shadow-sm">
                <Image
                    src="/Logo.png"
                    alt="MyProfessional Solutions Logo"
                    width={74}
                    height={44}
                />
            </span>
            <span>
                <span className="block text-lg font-black tracking-tight text-blue-950">
                    MyProfessional Solutions
                </span>
                <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-amber-600">
                    Making IT Simple
                </span>
            </span>
        </Link>
    );
}
