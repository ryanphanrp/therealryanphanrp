import ListPost from "@notion/list-post"
import React from "react"

export default function Page(): React.ReactElement {
  return (
    <>
      <div className="text-primary mb-8 text-2xl font-semibold">read my list</div>
      <ListPost />
    </>
  )
}
