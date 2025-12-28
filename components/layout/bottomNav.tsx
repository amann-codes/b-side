"use client"

import { navItems } from "./navItem"
import { usePathname } from "next/navigation"
import Link from "next/link"

export function BottomNav() {
    const pathname = usePathname()

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 border-t-2 border-border bg-card">
            <div className="flex items-center justify-around h-16 max-w-lg mx-auto px-2">
                {navItems.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname === item.route
                    return (
                        <Link
                            key={item.route}
                            href={item.route}
                            className="flex flex-col items-center justify-center gap-0.5 min-w-0 flex-1 transition-colors group"
                        >
                            <Icon
                                className={`h-6 w-6 transition-colors ${isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}`}
                            />
                            <span
                                className={`text-[10px] font-bold uppercase tracking-wide transition-colors ${isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}`}
                            >
                                {item.label}
                            </span>
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}