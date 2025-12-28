import type { Metadata } from "next"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layout/sidebar"
import { BottomNav } from "@/components/layout/bottomNav"
import { AppHeader } from "@/components/layout/header"

export const metadata: Metadata = {
    title: "Music Archive - Discover, Discuss & Explore",
    description:
        "A collaborative music archive for discovering artists, tracks, and albums. Share samples, cover art inspiration, and performances.",
    generator: "v0.app",
    icons: {
        icon: [
            {
                url: "/icon-light-32x32.png",
                media: "(prefers-color-scheme: light)",
            },
            {
                url: "/icon-dark-32x32.png",
                media: "(prefers-color-scheme: dark)",
            },
            {
                url: "/icon.svg",
                type: "image/svg+xml",
            },
        ],
        apple: "/apple-icon.png",
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <SidebarProvider defaultOpen={true}>
            <div className="relative flex min-h-screen w-full bg-background">
                <AppSidebar />

                <SidebarInset className="flex flex-col">
                    <AppHeader />
                    <main className="flex-1 pb-16 md:pb-0">
                        {children}
                    </main>
                    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
                        <BottomNav />
                    </div>
                </SidebarInset>
            </div>
        </SidebarProvider>
    )
}
