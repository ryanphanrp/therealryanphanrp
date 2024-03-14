import { Client } from "@notionhq/client"
import { NotionAPI } from "notion-client"

const AUTH_TOKEN = "secret_PICuVKrvBtur8vmhB37U5gizOjoMEiX0oThhng5tPOj"

// Rename to Notion Unnofical API
export const notionPrivateAPI = new NotionAPI()

// Rename to Notion Official API
export const notionAPI = new Client({ auth: AUTH_TOKEN })
