import React from "react"
import { Block, TableBlock } from "notion-types"
import { useNotionContext } from "../context"
import { cs } from "../../utils/notion-util"
import { Text } from "./text"
import { TableCell, TableRow } from "@shadui/table"

interface TableRowProps extends React.HTMLProps<HTMLTableRowElement> {
  block: Block
  blockId: string
}

export const NotionTableRow: React.FC<TableRowProps> = ({ block, blockId }) => {
  const { recordMap } = useNotionContext()
  const tableBlock = recordMap.block[block.parent_id]?.value as TableBlock
  const order = tableBlock.format?.table_block_column_order
  const formatMap = tableBlock.format?.table_block_column_format
  const backgroundColor = block.format?.block_color

  if (!tableBlock || !order) {
    return null
  }

  return (
    <TableRow
      className={cs(
        "notion-simple-table-row border border-neutral-900",
        backgroundColor && `notion-${backgroundColor}`,
        blockId
      )}>
      {order.map(column => {
        const color = formatMap?.[column]?.color
        return (
          <TableCell
            key={column}
            className={color ? `notion-${color} border-l-2` : ""}
            style={{
              width: formatMap?.[column]?.width ?? 120
            }}>
            <Text value={block.properties?.[column] || [["ㅤ"]]} block={block} />
          </TableCell>
        )
      })}
    </TableRow>
  )
}
