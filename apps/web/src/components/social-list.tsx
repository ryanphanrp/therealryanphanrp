"use client"

import { cn } from "@shared-utils/cn"
import { Aperture, Facebook, Github, Instagram } from "lucide-react"
import React from "react"
import siteConfig from "@/config/site.config"

interface SocialItemProps {
  link: string
  icon: React.ReactNode
  item: string
}

const socialList: SocialItemProps[] = [
  {
    item: "instagram",
    icon: <Instagram />,
    link: siteConfig.socialList.instagram
  },
  {
    item: "github",
    icon: <Github />,
    link: siteConfig.socialList.github
  },
  {
    item: "facebook",
    icon: <Facebook />,
    link: siteConfig.socialList.facebook
  },
  {
    item: "flickr",
    icon: <Aperture />,
    link: siteConfig.socialList.flickr
  }
]

const SocialItem: React.FC<SocialItemProps> = ({ link, icon }) => {
  return (
    <div className="social-item mx-2">
      <a className="transition-all duration-300 hover:text-cyan-700" href={link} rel="noreferrer" target="_blank">
        {icon}
      </a>
    </div>
  )
}

interface SocialListProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

const SocialList: React.FC<SocialListProps> = ({ className, ...props }) => {
  return (
    <div className={cn("social-list ml-4 flex", className)} {...props}>
      {socialList.map(item => (
        <SocialItem key={item.item} {...item} />
      ))}
    </div>
  )
}

export default SocialList
