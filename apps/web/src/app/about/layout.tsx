import type { Metadata } from "next"
import siteConfig from "@/config/site.config"

export const metadata: Metadata = {
  title: `About • ${siteConfig.title}`
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <section className="h-full w-full">{children}</section>
}
