import { Separator } from "@shadui/separator"
import React from "react"
import { NotionHeaderDto } from "../@types"
import { formatDateTime } from "../utils/notion-util"
import Tags from "./tags"

const NotionHeader: React.FC<NotionHeaderDto> = ({ title, understand, tags, status, date }) => {
  const timeDate = formatDateTime(date)
  return (
    <div className="notion-page">
      <h1 className="text-primary mb-2 flex-wrap text-2xl font-semibold tracking-wide">{title}</h1>
      <div className="mb-4 flex items-center">
        <div className="time-blog text-sm italic text-neutral-600">{timeDate}</div>
        <Separator className="mx-2" orientation="vertical" />
        <Tags tags={tags} />
        <div className="border-primary hover:bg-primary hover:text-primary-foreground text-primary ml-2 mr-2 cursor-pointer border px-2 font-mono text-xs font-semibold tracking-wide transition-all duration-500 ease-in-out">
          {understand}
        </div>
      </div>
    </div>
  )
}
export default NotionHeader
