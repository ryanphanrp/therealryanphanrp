import { getBlockParentPage, getPageTableOfContents, getTextContent, uuidToId } from "notion-utils"
import { useNotionContext } from "../context"
import { cs } from "../../utils/notion-util"
import { Text } from "./text"
import { BlockType } from "../../utils/enum"
import { cn } from "shared-utils/cn"

// TODO: styling
export const SubSubHeader = ({ block, blockId, children }: any) => {
  const { recordMap } = useNotionContext()
  let indentLevelClass: string
  if (!block.properties) return null

  const tocIndentLevelCache: {
    [blockId: string]: number
  } = {}

  const blockColor = block.format?.block_color
  const id = uuidToId(block.id)
  const title = getTextContent(block.properties.title) || `Notion Header ${id}`

  // we use a cache here because constructing the ToC is non-trivial
  let indentLevel = tocIndentLevelCache[block.id]
  const onClickTitle = () => {
    if (block.format?.toggleable) return
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (indentLevel === undefined) {
    const page = getBlockParentPage(block, recordMap)

    if (page) {
      const toc = getPageTableOfContents(page, recordMap)
      const tocItem = toc.find(tocItem => tocItem.id === block.id)
      if (tocItem) {
        indentLevel = tocItem.indentLevel
        tocIndentLevelCache[block.id] = indentLevel
      }
    }
  }

  if (indentLevel !== undefined) {
    indentLevelClass = `notion-h-indent-${indentLevel}`
  }

  // TODO: refactor
  const isH1 = block.type === BlockType.HEADER
  const isH2 = block.type === BlockType.SUB_HEADER
  const isH3 = block.type === BlockType.SUB_SUB_HEADER

  const classNameStr = cs(
    isH1 && "notion-h notion-h1 text-2xl font-semibold tracking-tight",
    isH2 && "notion-h notion-h2 text-xl font-semibold tracking-tight",
    isH3 && "notion-h notion-h3 text-lg font-semibold tracking-tight",
    blockColor && `notion-${blockColor}`,
    // @ts-ignore
    indentLevelClass,
    blockId
  )

  const innerHeader = (
    <span className="flex items-center">
      <div id={id} className="notion-header-anchor" />
      <div
        className={cn(
          "notion-h-title cursor-pointer",
          !block.format?.toggleable && "underline-offset-2 hover:underline"
        )}
        onClick={() => onClickTitle()}>
        <Text value={block.properties.title} block={block} />
      </div>
    </span>
  )
  let headerBlock = <></>

  //page title takes the h1 so all header blocks are greater
  if (isH1) {
    headerBlock = (
      <h2 className={classNameStr} data-id={id}>
        {innerHeader}
      </h2>
    )
  } else if (isH2) {
    headerBlock = (
      <h3 className={classNameStr} data-id={id}>
        {innerHeader}
      </h3>
    )
  } else {
    headerBlock = (
      <h4 className={classNameStr} data-id={id}>
        {innerHeader}
      </h4>
    )
  }

  if (block.format?.toggleable) {
    return (
      <details className={cs("notion-toggle", blockId)}>
        <summary>{headerBlock}</summary>
        <div>{children}</div>
      </details>
    )
  } else {
    return headerBlock
  }
}
