import { Block } from "notion-types"
import React from "react"
import { cs } from "../../utils/notion-util"
import { useNotionContext } from "../context"

interface NotionAudioProps {
  block: Block
  className?: string
}

export const NotionAudio: React.FC<NotionAudioProps> = ({ block, className }) => {
  const { recordMap } = useNotionContext()
  const audioSource = recordMap.signed_urls[block.id] || block.properties?.source?.[0]?.[0]
  return (
    <audio controls className={cs("w-full", className)}>
      <source src={audioSource} type="audio/mpeg" />
    </audio>
  )
}
