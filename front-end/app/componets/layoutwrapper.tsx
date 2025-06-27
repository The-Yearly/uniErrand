'use client'
import { usePathname } from "next/navigation"
import Navbar from "./navbar"
export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const path = usePathname()
    const hideNavbar = path.startsWith("/authentication") || path=="/"
    return (
        <>
        {!hideNavbar && <Navbar />}
        {children}
        </>
    );
}