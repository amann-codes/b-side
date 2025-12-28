"use client"

import type React from "react"
import { SidebarInset } from "@/components/ui/sidebar"
import "./globals.css"
import { Geist, Geist_Mono } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Provider } from "@/components/layout/provider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const client = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`} suppressHydrationWarning>
        <Provider>
          <QueryClientProvider client={client}>
            <SidebarInset className="flex flex-col">{children}</SidebarInset>
          </QueryClientProvider>
        </Provider>
      </body>
    </html >
  )
}
