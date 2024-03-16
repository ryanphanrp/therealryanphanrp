"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import { cn } from "@shared-utils/cn"

const navItems = {
  "/": {
    name: "home"
  },
  "/blog": {
    name: "T.I.L"
  },
  "/about": {
    name: "about"
  }
}

export default function Header(): React.ReactElement {
  let pathname = usePathname() || "/"
  if (pathname.includes("/blog/")) {
    pathname = "/blog"
  }
  return (
    <header className="flex w-full justify-center py-8">
      <div className="flex flex-row space-x-0 pr-10">
        {Object.entries(navItems).map(([path, { name }]) => {
          const isActive = path === pathname
          return (
            <Link
              className={cn("hover:text-primary relative flex px-2 py-1 align-middle transition-all", {
                "text-primary font-semibold": isActive,
                "text-neutral-500": !isActive
              })}
              href={path}
              key={path}>
              {name}
              {isActive ? (
                <motion.div
                  className="bg-primary to-primary absolute inset-0 top-7 z-[-1] mx-2 h-[1px] from-transparent"
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
