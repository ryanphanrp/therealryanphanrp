import { UnLazyImage } from "@unlazy/react"
import { Block } from "notion-types"
import React from "react"
import notionConfig from "../../config/notion-config"
import { defaultMapImageUrl } from "../../utils/map-image-url"

interface NotionImageProps {
  block: Block
  className?: string
}

export const ImageNotion: React.FC<NotionImageProps> = ({ block, className }) => {
  const imgLink = block.properties.source?.[0]?.[0]
  const caption = block.properties?.caption?.[0]?.[0] ?? notionConfig.defaultImgAlt
  const source = defaultMapImageUrl(imgLink, block) ?? notionConfig.defaultImage
  return <UnLazyImage className={className} autoSizes src={source} alt={caption} />
}
