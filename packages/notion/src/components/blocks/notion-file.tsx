import { Block } from "notion-types"
import React from "react"
import { FileIcon } from "../icons/file-icon"
import { Text } from "./text"
import { useNotionContext } from "../context"
import Link from "./link"

interface NotionFileProps extends React.HTMLProps<HTMLDivElement> {
  block: Block
}

export const NotionFile: React.FC<NotionFileProps> = ({ block, ...props }) => {
  const { recordMap } = useNotionContext()
  const source = recordMap.signed_urls[block.id] || block.properties?.source?.[0]?.[0]

  return (
    <div {...props}>
      <Link className="notion-file-link" href={source} target="_blank" rel="noopener noreferrer">
        <FileIcon className="notion-file-icon" />

        <div className="notion-file-info">
          <div className="notion-file-title">
            <Text value={block.properties?.title || [["File"]]} block={block} />
          </div>

          {block.properties?.size && (
            <div className="notion-file-size">
              <Text value={block.properties.size} block={block} />
            </div>
          )}
        </div>
      </Link>
    </div>
  )
}
