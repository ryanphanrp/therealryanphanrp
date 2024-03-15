import * as React from "react"

import { Block, Decoration, ExternalObjectInstance } from "notion-types"
import { parsePageId } from "notion-utils"

import { getHashFragmentValue } from "../../utils/notion-util"
import Link from "../blocks/link"
import NotionImage from "../blocks/notion-image"
import { useNotionContext } from "../context"
import { PageTitle } from "../stuff/page-title"

/**
 * Renders a single piece of Notion text, including basic rich text formatting.
 *
 * These represent the innermost leaf nodes of a Notion subtree.
 *
 * TODO: I think this implementation would be more correct if the reduce just added
 * attributes to the final element's style.
 */
export const Text: React.FC<{
  value: Decoration[]
  block: Block
  linkProps?: any
  linkProtocol?: string
  inline?: boolean // TODO: currently unused
}> = ({ value, block, linkProps, linkProtocol }) => {
  const { recordMap, mapPageUrl, mapImageUrl, rootDomain } = useNotionContext()

  return (
    <React.Fragment>
      {value?.map(([text, decorations], index) => {
        // TODO: sometimes notion shows a max of N items to prevent overflow
        if (!decorations) {
          if (text === ",") {
            return <span key={index} style={{ padding: "0.5em" }} />
          } else {
            return <React.Fragment key={index}>{text}</React.Fragment>
          }
        }

        const formatted = decorations.reduce(
          (element: React.ReactNode, decorator) => {
            switch (decorator[0]) {
              case "p": {
                // link to an internal block (within the current workspace)
                const blockId = decorator[1]
                const linkedBlock = recordMap.block[blockId]?.value
                if (!linkedBlock) {
                  console.log('"p" missing block', blockId)
                  return null
                }

                return <PageTitle block={linkedBlock} />
              }

              case "‣": {
                // link to an external block (outside of the current workspace)
                const linkType = decorator[1][0]
                const id = decorator[1][1]

                switch (linkType) {
                  case "u": {
                    const user = recordMap.notion_user[id]?.value
                    if (!user) {
                      console.log('"‣" missing user', id)
                      return null
                    }
                    const name = [user.given_name, user.family_name].filter(Boolean).join(" ")
                    return (
                      <NotionImage
                        className="notion-user"
                        customSrc={mapImageUrl(user.profile_photo, block)}
                        customAlt={name}
                      />
                    )
                  }

                  default: {
                    const linkedBlock = recordMap.block[id]?.value
                    if (!linkedBlock) {
                      console.log('"‣" missing block', linkType, id)
                      return null
                    }
                    return <PageTitle block={linkedBlock} />
                  }
                }
              }

              case "h":
                return <span className={`notion-${decorator[1]}`}>{element}</span>

              case "c":
                return (
                  <code className="notion-inline-code text-primary rounded bg-neutral-200 px-1 font-mono text-sm">
                    {element}
                  </code>
                )

              case "b":
                return <span className="font-semibold">{element}</span>

              case "i":
                return <em>{element}</em>

              case "s":
                return <s>{element}</s>

              case "_":
                return <span className="notion-inline-underscore">{element}</span>

              case "e":
                return <div>Equation</div>

              case "m":
                // comment / discussion
                return element //still need to return the base element

              case "a": {
                const v = decorator[1]
                const pathname = v.substr(1)
                const id = parsePageId(pathname, { uuid: true })

                if ((v[0] === "/" || v.includes(rootDomain as string)) && id) {
                  if (typeof rootDomain === "string") {
                    const href = v.includes(rootDomain) ? v : `${mapPageUrl(id)}${getHashFragmentValue(v)}`

                    return <Link href={href} {...linkProps} />
                  }
                } else {
                  return (
                    <Link href={linkProtocol ? `${linkProtocol}:${decorator[1]}` : decorator[1]} {...linkProps}>
                      {element}
                    </Link>
                  )
                }
              }

              case "d":
                return <div>date</div>

              case "u": {
                const userId = decorator[1]
                const user = recordMap.notion_user[userId]?.value

                if (!user) {
                  console.log("missing user", userId)
                  return null
                }
                const name = [user.given_name, user.family_name].filter(Boolean).join(" ")
                return (
                  <span className="notion-user-wrapper bg-primary flex w-auto items-center rounded-full p-0.5">
                    <NotionImage
                      className="notion-user h-4 w-4 rounded-full"
                      customSrc={mapImageUrl(user.profile_photo, block)}
                      customAlt={name}
                    />
                    <span className="notion-user-name text-primary-foreground text-sm">{name}</span>
                  </span>
                )
              }

              case "eoi": {
                const blockId = decorator[1]
                const externalObjectInstance = recordMap.block[blockId]?.value as ExternalObjectInstance
                return <div>EOI</div>
              }

              default:
                if (process.env.NODE_ENV !== "production") {
                  console.log("unsupported text format", decorator)
                }

                return element
            }
          },
          <>{text}</>
        )
        return <React.Fragment key={index}>{formatted}</React.Fragment>
      })}
    </React.Fragment>
  )
}
