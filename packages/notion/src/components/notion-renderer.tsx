import { ExtendedRecordMap } from "notion-types"
import { getPageTitle } from "notion-utils"
import { getProperty } from "../utils/notion-util"
import React from "react"
import { NotionContextProvider } from "./context"
import { NotionBlock } from "./notion-block"
import NotionHeader from "./notion-header"

export interface NotionRendererProps {
  recordMap: ExtendedRecordMap
  pageId: string
}

const NotionRenderer = async ({ recordMap, pageId, ...rest }: NotionRendererProps): Promise<React.ReactElement> => {
  if (!recordMap) {
    return <></>
  }

  const pageHeaderData = {
    title: getPageTitle(recordMap),
    understand: getProperty("understand", pageId, recordMap),
    tags: getProperty("tags", pageId, recordMap),
    status: getProperty("status", pageId, recordMap),
    date: getProperty("date", pageId, recordMap)
  }

  return (
    <>
      <NotionHeader {...pageHeaderData} />
      <NotionContextProvider rootPageId={pageId} recordMap={recordMap}>
        <NotionBlock blockId={pageId} {...rest} />
      </NotionContextProvider>
    </>
  )
}

export default NotionRenderer
