type TagsProps = {
  tags: string[]
} & React.HTMLAttributes<HTMLDivElement>

const Tags: React.FC<TagsProps> = ({ tags, ...props }) => {
  return (
    <div className="flex" {...props}>
      {tags.map(tag => (
        <span
          className="text-primary mr-2 cursor-pointer font-mono text-sm font-semibold tracking-wide underline-offset-2 hover:underline"
          key={tag}>
          {tag}
        </span>
      ))}
    </div>
  )
}

export default Tags
