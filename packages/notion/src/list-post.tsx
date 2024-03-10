import { convertToArticleList, getAllPosts } from "./lib/notion"
import PostCard from "./post-card"
import { PostCardDto } from "./@types"

export default async function ListPost() {
  const articles = await getArticles()

  return (
    <div>
      {articles.map((article: PostCardDto) => (
        <PostCard key={article.id} {...article} />
      ))}
    </div>
  )
}

const getArticles = async (): Promise<PostCardDto[]> => {
  const data = await getAllPosts()
  const { articles } = convertToArticleList(data)
  return articles
}
