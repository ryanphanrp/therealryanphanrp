import React from "react"
import { NotionHeaderDto } from "../@types"

const NotionHeader: React.FC<NotionHeaderDto> = ({ title, understand, tags, status, date }) => {
  return (
    <div className="notion-page">
      <h1 className="text-primary text-2xl font-semibold tracking-wide">{title}</h1>
      <div>
        <p>Understand: {understand}</p>
        <p>Tags: {tags}</p>
        <p>Status: {status}</p>
        <p>Date: {date}</p>
      </div>
    </div>
  )
}
export default NotionHeader
