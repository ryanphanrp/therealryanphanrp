import { getPageDetail } from "./lib/notion"
import NotionRenderer from "./components/notion-renderer" // Import the NotionRenderer component and its props type
import "./style.css"

interface PageProps {
  pageId: string
}

export default async function PostDetail({ pageId }: PageProps) {
  const recordMap = await getPageDetail(pageId)
  return await NotionRenderer({ recordMap, pageId })
}
