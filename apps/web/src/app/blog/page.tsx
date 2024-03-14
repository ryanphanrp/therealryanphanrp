import ListPost from "@notion/list-post"
import NotionBlog from "@notion/index"
import React from "react"

export default function Page(): React.ReactElement {
  return (
    <>
      <NotionBlog />
      <ListPost />
    </>
  )
}
