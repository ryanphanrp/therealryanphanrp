import React from "react"
import { useNotionContext } from "../context"
import { getBlockTitle } from "notion-utils"
import { Block } from "notion-types"
import { highlight } from "sugar-high"
import { Button } from "ui/components/ui/button"
import copy from "copy-to-clipboard"

type CodeBlockProps = {
  block: Block
  defaultLanguage?: string
} & React.HTMLProps<HTMLDivElement>

export default function CodeBlock({ block, defaultLanguage = "text", ...props }: CodeBlockProps): React.ReactElement {
  const { recordMap } = useNotionContext()
  const content = getBlockTitle(block, recordMap)
  const language = (block.properties?.language?.[0]?.[0] || defaultLanguage).toLowerCase()

  let codeHTML = highlight(content)
  return (
    <div className="code-block__wrapper mb-4">
      <div className="code-block_header bg-primary border-primary flex w-full justify-between border border-b-0 px-4">
        <div className="code-language text-primary-foreground">{language}</div>
        <Button
          variant="ghost"
          className="code-copy-button text-primary-foreground h-6 px-2 py-0.5"
          onClick={() => copy(content)}>
          Copy
        </Button>
      </div>
      <pre className="border-primary overflow-x-auto border bg-white p-2 text-sm">
        <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
      </pre>
    </div>
  )
}
