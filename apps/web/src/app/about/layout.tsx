import siteConfig from "config/site.config"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: `About • ${siteConfig.title}`
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <section className="h-full w-full">{children}</section>
}
