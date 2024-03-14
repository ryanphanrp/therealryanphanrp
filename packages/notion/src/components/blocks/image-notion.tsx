import React from "react"
import { Block } from "notion-types"
import notionConfig from "../../config/notion-config"
import { defaultMapImageUrl } from "../../utils/map-image-url"
import { UnLazyImage } from "@unlazy/react"

interface NotionImageProps {
  blockId: string
  block: Block
}

export const ImageNotion: React.FC<NotionImageProps> = ({ blockId, block }) => {
  const imgLink = block.properties.source?.[0]?.[0]
  const caption = block.properties?.caption?.[0]?.[0] ?? notionConfig.defaultImgAlt
  const source = defaultMapImageUrl(imgLink, block) ?? notionConfig.defaultImage
  return <UnLazyImage autoSizes src={source} alt={caption} />
}
