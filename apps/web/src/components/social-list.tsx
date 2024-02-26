"use client"

import { cn } from "@shared-utils/cn"
import { Instagram, Github, Facebook, Aperture } from "lucide-react"
import type { FC } from "react"

interface SocialItemProps {
  link: string
  icon: React.ReactNode
  item: string
}

const socialList: SocialItemProps[] = [
  {
    item: "instagram",
    icon: <Instagram />,
    link: "https://www.instagram.com/__therealtinhtute"
  },
  {
    item: "github",
    icon: <Github />,
    link: "https://github.com/ryanphanrp"
  },
  {
    item: "facebook",
    icon: <Facebook />,
    link: "https://www.facebook.com/tinhtute.99"
  },
  {
    item: "flickr",
    icon: <Aperture />,
    link: "https://www.flickr.com/photos/143023436@N05/"
  }
]

const SocialItem: FC<SocialItemProps> = ({ link, icon }) => {
  return (
    <div className="social-item mx-2">
      <a href={link} className="transition-all duration-300 hover:text-cyan-700" target="_blank" rel="noreferrer">
        {icon}
      </a>
    </div>
  )
}

interface SocialListProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

const SocialList: FC<SocialListProps> = ({ className, ...props }) => {
  return (
    <div className={cn("social-list ml-4 flex", className)} {...props}>
      {socialList.map(item => (
        <SocialItem key={item.item} {...item} />
      ))}
    </div>
  )
}

export default SocialList
