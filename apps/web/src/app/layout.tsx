import type { Metadata } from "next"
import { Space_Grotesk as SpaceGrotesk } from "next/font/google"
import "ui/styles/globals.css"
import "./globals.css"
import { Toaster } from "@shadui/sonner"
import Header from "../components/header"
import { cn } from "@shared-utils/cn"

const fontBase = SpaceGrotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "therealryanphan",
  description: "Generated by create turbo with love"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(fontBase.className, "mx-4 mb-40 mt-8 flex max-w-2xl flex-col antialiased lg:mx-auto")}>
        <Toaster richColors position="top-right" />
        <Header />
        <main className="mx-auto h-full w-full max-w-5xl p-8 sm:p-4">{children}</main>
      </body>
    </html>
  )
}
