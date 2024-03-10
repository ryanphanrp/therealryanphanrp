import PostDetail from "@notion/post-detail"

interface PageProps {
  params: {
    pageId: string
  }
}

export default function Page(props: Readonly<PageProps>) {
  const { pageId } = props.params
  return (
    <main>
      <PostDetail pageId={pageId} />
    </main>
  )
}
