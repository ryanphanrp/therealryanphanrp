import * as React from "react"

import * as types from "notion-types"
import { getBlockTitle, uuidToId } from "notion-utils"

import {
  Bookmark,
  Callout,
  CodeBlock,
  GoogleDrive,
  ImageNotion,
  NotionAudio,
  NotionFile,
  NotionPlayer,
  NotionTableRow,
  NumberedList,
  SubSubHeader,
  Text,
  TextBlock
} from "./blocks"
import { useNotionContext } from "./context"
import { BlockType } from "../types/enum"
import { cn } from "@shared-utils/cn"
import { Separator } from "@shadui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@shadui/accordion"
import { Checkbox } from "@shadui/checkbox"

interface BlockProps {
  block: types.Block
  level: number
  hideBlockId?: boolean
  children?: React.ReactNode
}

export const Block: React.FC<BlockProps> = props => {
  const { recordMap } = useNotionContext()
  const { block, children, level, hideBlockId } = props

  if (!block) {
    return null
  }

  // ugly hack to make viewing raw collection views work properly
  if (level === 0 && block.type === BlockType.COLLECTION_VIEW) {
    ;(block as any).type = "collection_view_page"
  }

  const blockId = hideBlockId ? "notion-block" : `notion-block-${uuidToId(block.id)}`

  switch (block.type) {
    case BlockType.PAGE:
      return <div className={cn("notion-page", blockId)}>{children}</div>
    case BlockType.COLLECTION_VIEW_PAGE:
    case BlockType.HEADER:
    case BlockType.SUB_HEADER:
    case BlockType.SUB_SUB_HEADER:
      return (
        <SubSubHeader block={block} blockId={blockId}>
          {children}
        </SubSubHeader>
      )
    case BlockType.DIVIDER:
      return <Separator />
    case BlockType.TEXT:
      return (
        <TextBlock blockId={blockId} block={block}>
          {children}
        </TextBlock>
      )

    case BlockType.BULLETED_LIST:
    case BlockType.NUMBERED_LIST:
      return (
        <NumberedList block={block} blockId={blockId}>
          {children}
        </NumberedList>
      )

    case BlockType.VIDEO:
      return <NotionPlayer block={block} className="mb-1" />

    case BlockType.AUDIO:
      return <NotionAudio block={block} className="mb-1" />

    case BlockType.TWEET:
    case BlockType.MAPS:
    case BlockType.PDF:
    case BlockType.FIGMA:
    case BlockType.TYPEFORM:
    case BlockType.CODEPEN:
    case BlockType.EXCALIDRAW:
    case BlockType.IMAGE:
      return <ImageNotion className="mb-1" block={block} />
    case BlockType.GIST:
    case BlockType.CODE:
      return <CodeBlock block={block} />

    case BlockType.DRIVE:
      return <GoogleDrive block={block} />

    case BlockType.FILE:
      return <NotionFile block={block} />

    case BlockType.COLUMN_LIST:
      return <div className={cn("notion-row", blockId)}>{children}</div>

    case BlockType.QUOTE: {
      if (!block.properties) return null
      const blockColor = block.format?.block_color
      const title = block.properties.title || "Notion Block Title Fallback"
      return (
        <blockquote
          className={cn(
            "notion-quote border-primary bg-primary/5 mb-2 border-l-2 py-2 pl-4 italic",
            blockColor && `notion-${blockColor}`,
            blockId
          )}>
          {title}
        </blockquote>
      )
    }

    case BlockType.CALLOUT:
      return <Callout blockId={blockId} block={block} />

    case BlockType.BOOKMARK:
      return <Bookmark className="mb-1" block={block} blockId={blockId} />

    case BlockType.TOGGLE:
      return (
        <Accordion type="single" collapsible>
          <AccordionItem value="item">
            <AccordionTrigger className="flex-row-reverse items-center py-1.5 text-left">
              <div className="ml-2 mr-auto">{getBlockTitle(block, recordMap)}</div>
            </AccordionTrigger>
            <AccordionContent className="pl-6">{children}</AccordionContent>
          </AccordionItem>
        </Accordion>
      )

    case BlockType.TABLE_OF_CONTENTS:
      return <div className="table-of-contents">Table of Contents</div>

    case BlockType.TO_DO:
      const isChecked = block.properties?.checked?.[0]?.[0] === "Yes"
      return (
        <div className="mb-1 flex items-center space-x-2">
          <Checkbox checked={isChecked} id="terms" />
          <label
            htmlFor="terms"
            className={cn(
              isChecked && "line-through",
              "leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            )}>
            <Text value={block.properties?.title} block={block} />
          </label>
        </div>
      )

    case BlockType.TRANSCLUSION_CONTAINER:
      return <div className={cn("notion-sync-block", blockId)}>{children}</div>

    case BlockType.ALIAS:
      return <div className="alias">Alias</div>

    case BlockType.TABLE:
      return (
        <table className={cn("notion-simple-table", blockId)}>
          <tbody>{children}</tbody>
        </table>
      )

    case BlockType.TABLE_ROW:
      return <NotionTableRow block={block} blockId={blockId} />

    default:
      if (process.env.NODE_ENV !== "production") {
        console.log("Unsupported type " + (block as any).type, JSON.stringify(block, null, 2))
      }

      return (
        <div>
          <div>Unsupported type {block.type}</div>
          <pre>{JSON.stringify(block, null, 2)}</pre>
        </div>
      )
  }

  return <div className="text-lg font-medium text-red-600">Fallback Block</div>
}
