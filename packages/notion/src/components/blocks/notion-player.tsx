import { Block } from "notion-types"
import React from "react"

interface NotionPlayerProps {
  block: Block
  className?: string
}

export const NotionPlayer: React.FC<NotionPlayerProps> = ({ block, className }) => {
  const blockSource = block.properties.source?.[0]?.[0]

  if (getYoutubeId(blockSource)) {
    return (
      <div>
        <iframe
          className="aspect-video w-full"
          src={`https://www.youtube.com/embed/${getYoutubeId(blockSource)}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>
      </div>
    )
  }

  return (
    <div className="my-2 border border-red-500 p-2">
      <details>
        <summary>Unsupport this type video</summary>
        <pre>{JSON.stringify(block, null, 2)}</pre>
      </details>
      <code>{blockSource}</code>
    </div>
  )
}

function extractHostname(url: string): string {
  const hostname = new URL(url).hostname
  return hostname
}

function getYoutubeId(url: string) {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
  var match = url.match(regExp)
  return match && match[7].length == 11 ? match[7] : false
}
