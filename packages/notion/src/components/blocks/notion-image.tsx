import React from "react"

const DEFAULT_IMAGE = "https://www.notion.so/images/page-cover-default.png"
const DEFAULT_IMAGE_ALT = "Notion default image"

type NotionImageProps = {
  customSrc: string | null
  customAlt: string | null
} & React.ImgHTMLAttributes<HTMLImageElement>

export default function NotionImage({ customSrc, customAlt, ...props }: NotionImageProps) {
  return (
    <img
      {...props}
      className="notion-image"
      src={customSrc ?? DEFAULT_IMAGE}
      alt={customAlt ?? DEFAULT_IMAGE_ALT}
      loading="lazy"
    />
  )
}
