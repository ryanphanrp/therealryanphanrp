import PostDetail from "@notion/post-detail"
import React from "react"

interface PageProps {
  params: {
    pageId: string
  }
}

export default function Page(props: Readonly<PageProps>): React.ReactElement {
  const { pageId } = props.params
  return <PostDetail pageId={pageId} />
}
