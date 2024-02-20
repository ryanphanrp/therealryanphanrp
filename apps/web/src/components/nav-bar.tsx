import siteConfig from "@/config/site.config"
import Link from "next/link"
import { cn } from "shared-utils/cn"

export function NavBar({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className={cn("flex h-16 w-full items-center bg-white px-4 max-sm:justify-between", className)} {...props}>
      <Link
        href="/"
        className="hover:text-primary mr-8 flex items-center space-x-2 font-semibold transition-colors md:text-lg">
        <span className="font-bold text-gray-700 sm:block">{siteConfig.title}</span>
      </Link>
    </nav>
  )
}

export default NavBar
