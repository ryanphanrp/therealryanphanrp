import React from "react"
import { NotionHeaderDto } from "../@types"
import { formatDateTime } from "../utils/notion-util"
import Tags from "./tags"

const NotionHeader: React.FC<NotionHeaderDto> = ({ title, understand, tags, status, date }) => {
  const timeDate = formatDateTime(date)
  return (
    <div className="notion-page">
      <h1 className="text-primary flex-wrap text-2xl font-semibold tracking-wide">{title}</h1>
      <div className="time-blog text-sm italic text-neutral-600">{timeDate}</div>
      <div className="mb-6 mt-2 flex items-center">
        <div className="border-primary text-primary cursor-pointer border px-2 font-mono text-xs font-semibold">
          {understand}
        </div>
        <div className="bg-primary mx-3 h-1 w-1 rounded-full"></div>
        <Tags tags={tags} />
      </div>
    </div>
  )
}
export default NotionHeader
