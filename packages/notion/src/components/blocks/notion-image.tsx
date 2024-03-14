import React from "react"
import { UnLazyImage } from "@unlazy/react"
import notionConfig from "../../config/notion-config"

type NotionImageProps = {
  customSrc: string | null
  customAlt: string | null
} & React.ImgHTMLAttributes<HTMLImageElement>

export default function NotionImage({ customSrc, customAlt, ...props }: NotionImageProps) {
  return (
    <UnLazyImage
      {...props}
      src={customSrc ?? notionConfig.defaultImage}
      alt={customAlt ?? notionConfig.defaultImgAlt}
    />
  )
}
