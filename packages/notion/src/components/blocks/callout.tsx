import React from "react"
import { cs } from "../../utils/notion-util"
import { PageIcon } from "../stuff/page-icon"
import { Block } from "notion-types"
import { Text } from "./text"

type CalloutProps = {
  blockId: string
  block: Block
  children?: React.ReactNode
  type?: "default" | "warning" | "danger"
} & React.HTMLProps<HTMLDivElement>

// TODO: restyle
export function Callout({ children, blockId, block, type = "default", ...props }: CalloutProps) {
  return (
    <div
      className={cs(
        "notion-callout border-primary mb-4 flex border border-l-4 p-4",
        block.format?.block_color && `notion-${block.format?.block_color}_co`,
        blockId
      )}
      {...props}>
      <PageIcon block={block} />

      <div className="notion-callout-text ml-4">
        <Text value={block.properties?.title} block={block} />
        {children}
      </div>
    </div>
  )
}
