import { Block, BlockMap, ExtendedRecordMap } from "notion-types"
import { getPageProperty } from "notion-utils"
export * from "./map-image-url"
export * from "./map-page-url"
export { isUrl, formatDate, formatNotionDateTime } from 'notion-utils'

export function getProperty(name: string, pageId: string, recordMap: ExtendedRecordMap) {
  const block = recordMap.block[pageId]?.value as Block
  return getPageProperty(name, block, recordMap)
}

export function formatHashLink(slug: string) {
  if (typeof window !== "undefined") {
    return slug.toLowerCase().replace(/ /g, "-")
  }
}

export const cs = (...classes: Array<string | undefined | false>) => classes.filter(a => !!a).join(" ")

const groupBlockContent = (blockMap: BlockMap): string[][] => {
  const output: string[][] = []

  let lastType: string | undefined = undefined
  let index = -1

  Object.keys(blockMap).forEach(id => {
    const blockValue = blockMap[id]?.value

    if (blockValue) {
      blockValue.content?.forEach(blockId => {
        const blockType = blockMap[blockId]?.value?.type

        if (blockType && blockType !== lastType) {
          index++
          lastType = blockType
          output[index] = []
        }

        if (index > -1) {
          output[index].push(blockId)
        }
      })
    }

    lastType = undefined
  })

  return output
}

export const getListNumber = (blockId: string, blockMap: BlockMap) => {
  const groups = groupBlockContent(blockMap)
  const group = groups.find(g => g.includes(blockId))

  if (!group) {
    return
  }

  return group.indexOf(blockId) + 1
}

export const getHashFragmentValue = (url: string) => {
  return url.includes("#") ? url.replace(/^.+(#.+)$/, "$1") : ""
}

export const isBrowser = typeof window !== "undefined"

const youtubeDomains = new Set([
  "youtu.be",
  "youtube.com",
  "www.youtube.com",
  "youtube-nocookie.com",
  "www.youtube-nocookie.com"
])

export const getYoutubeId = (url: string): string | null => {
  try {
    const { hostname } = new URL(url)
    if (!youtubeDomains.has(hostname)) {
      return null
    }
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/i

    const match = url.match(regExp)
    if (match && match[2].length == 11) {
      return match[2]
    }
  } catch {
    // ignore invalid urls
  }

  return null
}
