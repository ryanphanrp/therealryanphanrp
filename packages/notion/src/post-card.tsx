import { FC, memo } from "react"
import { PostCardDto } from "./@types"

const PostCard: FC<PostCardDto> = ({ id, title, date }) => {
  return (
    <a href={`/blog/${id}`}>
      <div className="mb-2 block">
        <div className="text-md hover:decoration line-clamp-2 cursor-pointer underline-offset-4 transition-all duration-500 ease-in-out hover:text-cyan-800 hover:underline hover:decoration-cyan-700">
          {title}
        </div>
        <div className="bottom-0 text-xs italic text-gray-500">{date}</div>
      </div>
    </a>
  )
}

export default memo(PostCard)
