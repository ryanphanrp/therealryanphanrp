import React from "react"
import { cs, getListNumber } from "../../utils/notion-util"
import { Text } from "./text"
import { useNotionContext } from "../context"
import { BlockType } from "../../utils/enum"

function NumberedList({ blockId, block, children, ...props }: any) {
  const { recordMap } = useNotionContext()

  const wrapList = (content: React.ReactNode, start?: number) =>
    block.type === BlockType.BULLETED_LIST ? (
      <ul className={cs("notion-list pl-10", "notion-list-disc list-disc", blockId)}>{content}</ul>
    ) : (
      <ol start={start} className={cs("notion-list pl-10", "notion-list-numbered list-decimal", blockId)}>
        {content}
      </ol>
    )

  let output: JSX.Element | null = null

  if (block.content) {
    output = (
      <>
        {block.properties && (
          <li>
            <Text value={block.properties.title} block={block} />
          </li>
        )}
        {wrapList(children)}
      </>
    )
  } else {
    output = block.properties ? (
      <li>
        <Text value={block.properties.title} block={block} />
      </li>
    ) : null
  }

  const isTopLevel = block.type !== recordMap.block[block.parent_id]?.value?.type
  const start = getListNumber(block.id, recordMap.block)

  return isTopLevel ? wrapList(output, start) : output
}

export default NumberedList
