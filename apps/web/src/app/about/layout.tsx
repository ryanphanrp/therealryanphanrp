import type { Metadata } from "next"
import React from "react"
import siteConfig from "@/config/site.config"

export const metadata: Metadata = {
  title: `About • ${siteConfig.title}`
}

interface AboutLayoutProps {
  children: React.ReactNode
}

export default function AboutLayout({ children }: Readonly<AboutLayoutProps>): React.ReactElement {
  return <section className="h-full w-full">{children}</section>
}
