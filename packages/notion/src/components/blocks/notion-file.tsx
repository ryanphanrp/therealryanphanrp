import { Block } from "notion-types"
import React from "react"
import { useNotionContext } from "../context"
import { FileIcon } from "../icons/file-icon"
import Link from "./link"
import { Text } from "./text"

interface NotionFileProps extends React.HTMLProps<HTMLDivElement> {
  block: Block
}

export const NotionFile: React.FC<NotionFileProps> = ({ block, ...props }) => {
  const { recordMap } = useNotionContext()
  const source = recordMap.signed_urls[block.id] || block.properties?.source?.[0]?.[0]

  return (
    <div {...props}>
      <Link
        className="notion-file-link hover:border-primary group flex items-center border border-x-2 border-transparent p-0.5"
        href={source}
        target="_blank"
        rel="noopener noreferrer">
        <FileIcon className="notion-file-icon mr-2 h-5 w-5" />

        <div className="notion-file-info line-clamp-1 flex w-full items-center justify-between truncate px-2">
          <div className="notion-file-title text-base hover:underline">
            <Text value={block.properties?.title || [["File"]]} block={block} />
          </div>

          {block.properties?.size && (
            <div className="notion-file-size text-xs italic">
              <Text value={block.properties.size} block={block} />
            </div>
          )}
        </div>
      </Link>
    </div>
  )
}
