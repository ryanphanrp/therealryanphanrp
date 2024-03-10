interface PostCardDto {
  id: string
  title: string
  date: string
  cover: string
  understand: Understand
  tags: string[]
}

type PostDetailDto = PostCardDto & {
  content: string
}

type TagDto = {
  id: string
  name: string
  color: ColorKey
}

type ColorKey = "gray" | "brown" | "orange" | "yellow" | "purple" | "red" | "default" | "green" | "blue" | "pink"

type UnderstandCode = "Fluent" | "Basic" | "Not sure"
type Understand = {
  id: string
  name: UnderstandCode
  color: ColorKey
}

type Nullable<T> = T | null

export interface NotionHeaderDto {
  title: string
  tags: TagDto[] | any
  status: string | any
  date: string | any
  understand: Understand | any
}
