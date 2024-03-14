"use client"
import React from "react"
import { useNotionContext } from "./context"
import { Block } from "./block"

class NotionBlockProps {
  className?: string
  bodyClassName?: string
  header?: React.ReactNode
  footer?: React.ReactNode
  disableHeader?: boolean
  blockId?: string
  hideBlockId?: boolean
  level?: number = 0
}

export const NotionBlock = ({ blockId, level = 0, ...props }: NotionBlockProps) => {
  const { recordMap } = useNotionContext()

  const id = blockId || Object.keys(recordMap.block)[0]
  const block = recordMap.block[id]?.value

  if (!block) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("missing block", blockId)
    }
    return null
  }
  return (
    <Block key={id} level={level} block={block} {...props}>
      {block?.content?.map(contentBlockId => (
        <NotionBlock key={contentBlockId} blockId={contentBlockId} level={level + 1} {...props} />
      ))}
    </Block>
  )
}
