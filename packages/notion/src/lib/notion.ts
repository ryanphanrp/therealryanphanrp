import { ExtendedRecordMap } from "notion-types"
import { PostCardDto, TagDto } from "../types"
import { notionAPI, notionPrivateAPI } from "./client"

const DATABASE_ID = "3f740c7e7627414f92248b9333dd2a0f"

export const getAllPosts = async () => {
  const response = await notionAPI.databases.query({
    database_id: DATABASE_ID,
    filter: {
      or: [
        {
          property: "status",
          select: {
            equals: "publish"
          }
        }
      ]
    }
  })

  return response.results
}

export const mapArticleProperties = (article: any): PostCardDto => {
  const { id, properties, cover } = article
  return {
    id: id ?? "",
    cover: cover?.external?.url ?? "",
    title: properties?.title.title[0].plain_text ?? "example title",
    date: properties?.date.date.start,
    understand: {
      id: properties?.understand.select.id,
      name: properties?.understand.select.name,
      color: properties?.understand.select.color
    },
    tags: properties?.tags.multi_select.map((tag: TagDto) => tag.name)
  }
}

export const convertToArticleList = (tableData: any) => {
  let tags: TagDto[] = []

  const articles: PostCardDto[] = tableData.map((article: any) => {
    const { properties } = article
    properties?.tags?.multi_select?.forEach((category: any) => {
      const { name, color, id } = category
      if (!tags.some(cate => cate.id === id)) {
        tags.push({ id, name, color })
      }
    })

    return mapArticleProperties(article)
  })

  return { articles, tags }
}

export const getPageDetail = async (pageId: string): Promise<ExtendedRecordMap> => {
  return notionPrivateAPI.getPage(pageId, {})
}
