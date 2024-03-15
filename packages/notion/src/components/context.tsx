"use client"
import * as React from "react"

import { ExtendedRecordMap } from "notion-types"
import { defaultMapImageUrl, defaultMapPageUrl } from "../utils/notion-util"
import { MapImageUrlFn, MapPageUrlFn } from "../types/notion"

export interface NotionContext {
  recordMap: ExtendedRecordMap
  mapPageUrl: MapPageUrlFn
  mapImageUrl: MapImageUrlFn
  rootPageId?: string
  rootDomain?: string
  fullPage: boolean
  darkMode: boolean
  previewImages: boolean
  defaultPageIcon?: string
  defaultPageCover?: string
  defaultPageCoverPosition?: number
}

export interface PartialNotionContext {
  recordMap: ExtendedRecordMap
  mapPageUrl?: MapPageUrlFn
  mapImageUrl?: MapImageUrlFn
  rootPageId?: string
  rootDomain?: string
  fullPage?: boolean
  darkMode?: boolean
  previewImages?: boolean
  defaultPageIcon?: string
  defaultPageCover?: string
  defaultPageCoverPosition?: number
  children?: React.ReactNode
}

const defaultNotionContext: NotionContext = {
  recordMap: {
    block: {},
    collection: {},
    collection_view: {},
    collection_query: {},
    notion_user: {},
    signed_urls: {}
  },
  mapImageUrl: defaultMapImageUrl,
  mapPageUrl: defaultMapPageUrl(),
  fullPage: false,
  darkMode: false,
  previewImages: false,
  defaultPageIcon: "",
  defaultPageCover: "",
  defaultPageCoverPosition: 0.5
}

const ctx = React.createContext<NotionContext>(defaultNotionContext)

export const NotionContextProvider: React.FC<PartialNotionContext> = ({ children, recordMap, rootPageId }) => {
  const value = React.useMemo(
    () => ({
      ...defaultNotionContext,
      recordMap,
      rootPageId,
      mapPageUrl: defaultMapPageUrl(rootPageId),
      mapImageUrl: defaultMapImageUrl
    }),
    [rootPageId, recordMap]
  )

  return <ctx.Provider value={value}>{children}</ctx.Provider>
}

export const useNotionContext = (): NotionContext => {
  return React.useContext(ctx)
}
