import React from "react"
import { Block } from "notion-types"
import { useNotionContext } from "../context"
import Link from "./link"
import NotionImage from "./notion-image"

interface GoogleDriveProps extends React.HTMLProps<HTMLDivElement> {
  block: Block
}

export const GoogleDrive: React.FC<GoogleDriveProps> = ({ block, ...props }) => {
  const { mapImageUrl } = useNotionContext()
  const properties = block.format?.drive_properties
  if (!properties) return null
  let domain

  try {
    const url = new URL(properties.url)
    domain = url.hostname
  } catch (err) {
    // ignore invalid urls for robustness
  }

  return (
    <div {...props}>
      <Link className="notion-google-drive-link" href={properties.url} target="_blank" rel="noopener noreferrer">
        <div className="notion-google-drive-preview">
          <NotionImage
            customSrc={mapImageUrl(properties.thumbnail, block)}
            customAlt={properties.title || "Google Drive Document"}
            loading="lazy"
          />
        </div>

        <div className="notion-google-drive-body">
          {properties.title && <div className="notion-google-drive-body-title">{properties.title}</div>}

          {properties.icon && domain && (
            <div className="notion-google-drive-body-source">
              {properties.icon && (
                <div
                  className="notion-google-drive-body-source-icon"
                  style={{
                    backgroundImage: `url(${properties.icon})`
                  }}
                />
              )}

              {domain && <div className="notion-google-drive-body-source-domain">{domain}</div>}
            </div>
          )}
        </div>
      </Link>
    </div>
  )
}
