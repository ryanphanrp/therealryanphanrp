import { ExtendedRecordMap } from "notion-types"
import { getPageTitle } from "notion-utils"
import React, { Suspense } from "react"
import { getProperty } from "../utils/notion-util"
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
    <Suspense fallback={<div>Loading...</div>}>
      <NotionHeader {...pageHeaderData} />
      <NotionContextProvider rootPageId={pageId} recordMap={recordMap}>
        <NotionBlock blockId={pageId} {...rest} />
      </NotionContextProvider>
    </Suspense>
  )
}

export default NotionRenderer
