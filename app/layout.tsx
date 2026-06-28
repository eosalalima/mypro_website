import type { Metadata } from "next";import "./globals.css";
export const metadata:Metadata={title:"MyPro Solutions | Making IT Simple",description:"Myprofessional Solutions, Inc. is an Information Technology Solutions Provider for infrastructure, cybersecurity, managed services, computing devices, and digital transformation."};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en" className="h-full antialiased"><body className="min-h-full bg-white text-slate-900">{children}</body></html>}
