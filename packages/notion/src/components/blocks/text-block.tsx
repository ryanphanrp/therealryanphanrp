import { Block } from "notion-types"
import { cs } from "../../utils/notion-util"
import { Text } from "../blocks/text"
import * as React from "react"

type TextBlockProps = {
  blockId: string
  block: Block
  children?: React.ReactNode
} & React.HTMLProps<HTMLDivElement>

export function TextBlock({ blockId, block, children, ...props }: TextBlockProps) {
  if (!block.properties && !block.content?.length) {
    return <div className={cs("notion-blank", blockId)}>&nbsp;</div>
  }
  const blockColor = block.format?.block_color

  return (
    <div className={cs("notion-text", blockColor && `notion-${blockColor}`, blockId)} {...props}>
      {block.properties?.title && <Text value={block.properties.title} block={block} />}
      {children && <div className="notion-text-children">{children}</div>}
    </div>
  )
}
