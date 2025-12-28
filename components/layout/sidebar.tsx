"use client"

import { LogOut } from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { signOut } from "next-auth/react"
import { navItems } from "./navItem"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function AppSidebar() {
    const pathname = usePathname()

    return (
        <Sidebar collapsible="icon" className="border-r-2 border-border">
            <SidebarHeader className="border-b-2 border-border p-6">
                <div className="group-data-[collapsible=icon]:hidden">
                    <h1 className="text-2xl font-black text-foreground uppercase tracking-tight">MUSIC</h1>
                    <h2 className="text-2xl font-black text-primary uppercase tracking-tight">ARCHIVE</h2>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide font-mono mt-2">Discover & Discuss</p>
                </div>
                <div className="hidden group-data-[collapsible=icon]:flex items-center justify-center">
                    <span className="text-xl font-black text-primary">MA</span>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {navItems.map((n) => (
                                <SidebarMenuItem key={n.route}>
                                    <Link href={n.route}>
                                        <SidebarMenuButton
                                            tooltip={n.label}
                                            isActive={pathname === n.route}
                                            className="h-12 border-2 border-transparent data-[active=true]:border-primary data-[active=true]:bg-primary data-[active=true]:text-primary-foreground data-[active=true]:shadow-md data-[active=true]:shadow-primary/20 hover:bg-muted"
                                        >
                                            <n.icon className="h-6 w-6" />
                                            <span className="font-bold uppercase tracking-wide text-sm">{n.label}</span>
                                        </SidebarMenuButton>
                                    </Link>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="flex flex-row justify-between items-center border-t-2 border-border">
                <LogOut className="w-5 h-5 cursor-pointer" onClick={() => signOut()} />
                <SidebarTrigger className="md:flex" />
            </SidebarFooter>
        </Sidebar>
    )
}