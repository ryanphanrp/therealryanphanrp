import { Block } from "notion-types"
import { getTextContent } from "notion-utils"
import React from "react"
import { cs } from "../../utils/notion-util"
import Link from "../blocks/link"
import NotionImage from "../blocks/notion-image"
import { Text } from "../blocks/text"
import { useNotionContext } from "../context"

type BookmarkProps = {
  block: Block
  blockId: string
  className?: string
}

export const Bookmark: React.FC<BookmarkProps> = ({ block, blockId, className }) => {
  const { mapImageUrl } = useNotionContext()

  if (!block.properties) return null

  const link = block.properties.link
  if (!link || !link[0]?.[0]) return null

  let title = getTextContent(block.properties.title)
  if (!title) {
    title = getTextContent(link)
  }

  if (title && title.startsWith("http")) {
    try {
      const url = new URL(title)
      title = url.hostname
    } catch (err) {
      console.warn("Invalid link:", title)
    }
  }

  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      className={cs(
        "notion-row border-primary notion-bookmark flex h-24 max-h-24 w-full border border-l-4",
        block.format?.block_color && `notion-${block.format.block_color}`,
        blockId,
        className
      )}
      href={link[0][0]}>
      <div className="max-h-24 p-2">
        {title && (
          <div className="notion-bookmark-title line-clamp-1 font-medium">
            <Text value={[[title]]} block={block} />
          </div>
        )}

        {block.properties?.description && (
          <div className="notion-bookmark-description line-clamp-2 text-sm">
            <Text value={block.properties?.description} block={block} />
          </div>
        )}

        <div className="notion-bookmark-link flex h-4">
          {block.format?.bookmark_icon && (
            <div className="notion-bookmark-link-icon mr-1 h-4 w-4">
              <NotionImage customSrc={mapImageUrl(block.format?.bookmark_icon, block)} customAlt={title} />
            </div>
          )}

          <div className="notion-bookmark-link-text line-clamp-1 text-xs">
            <Text value={link} block={block} />
          </div>
        </div>
      </div>

      {block.format?.bookmark_cover && (
        <div className="notion-bookmark-cover aspect-video h-24">
          <NotionImage
            className="aspect-video h-24"
            customSrc={mapImageUrl(block.format?.bookmark_cover, block)}
            customAlt={title}
          />
        </div>
      )}
    </Link>
  )
}
