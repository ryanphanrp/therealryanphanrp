"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { FC } from "react"
import { cn } from "shared-utils/cn"

const navItems = {
  "/": {
    name: "home"
  },
  "/about": {
    name: "about"
  }
}

const Header: FC = () => {
  const pathname = usePathname() || "/"
  return (
    <header className="flex w-full justify-center py-8">
      <div className="flex flex-row space-x-0 pr-10">
        {Object.entries(navItems).map(([path, { name }]) => {
          const isActive = path === pathname
          return (
            <Link
              key={path}
              href={path}
              className={cn("relative flex px-2 py-1 align-middle transition-all hover:text-cyan-800", {
                "font-semibold text-cyan-800": isActive,
                "text-neutral-500": !isActive
              })}>
              {name}
              {isActive ? (
                <motion.div
                  className="absolute inset-0 top-7 z-[-1] mx-2 h-[1px] bg-cyan-700 from-transparent to-cyan-900"
                  layoutId="sidebar"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30
                  }}
                />
              ) : null}
            </Link>
          )
        })}
      </div>
    </header>
  )
}

export default Header
