# Notion blog with shadui

### Supported Blocks

The majority of Notion blocks and collection views are fully supported.

| Block Type               | Supported | Block Type Enum        | Notes                                                                                                            |
|--------------------------|-----------|------------------------|------------------------------------------------------------------------------------------------------------------|
| Page                     | ✅ Yes     | `page`                 |
| Text                     | ✅ Yes     | `text`                 | Supports all known text formatting options                                                                       |
| Bookmark                 | ✅ Yes     | `bookmark`             | Embedded preview of external URL                                                                                 |
| Bulleted List            | ✅ Yes     | `bulleted_list`        | `<ul>`                                                                                                           |
| Numbered List            | ✅ Yes     | `numbered_list`        | `<ol>`                                                                                                           |
| Heading 1                | ✅ Yes     | `header`               | `<h1>`                                                                                                           |
| Heading 2                | ✅ Yes     | `sub_header`           | `<h2>`                                                                                                           |
| Heading 3                | ✅ Yes     | `sub_sub_header`       | `<h3>`                                                                                                           |
| Quote                    | ✅ Yes     | `quote`                |
| Callout                  | ✅ Yes     | `callout`              |
| Equation (block)         | ❌ Missing | `equation`             | [katex](https://katex.org/) via [react-katex](https://github.com/MatejBransky/react-katex)                       |
| Equation (inline)        | ❌ Missing | `text`                 | [katex](https://katex.org/) via [react-katex](https://github.com/MatejBransky/react-katex)                       |
| Todos (checkboxes)       | ✅ Yes     | `to_do`                |
| Table Of Contents        | ✅ Yes     | `table_of_contents`    | See `notion-utils` `getPageTableOfContents` helper funtion                                                       |
| Divider                  | ✅ Yes     | `divider`              | Horizontal line                                                                                                  |
| Column                   | ✅ Yes     | `column`               |
| Column List              | ✅ Yes     | `column_list`          |
| Toggle                   | ✅ Yes     | `toggle`               | [`<details>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)                                 |
| Image                    | ✅ Yes     | `image`                | `<img>`                                                                                                          |
| Embed                    | ❌ Missing | `embed`                | Generic `iframe` embeds                                                                                          |
| Video                    | ❌ Missing | `video`                | `iframe`                                                                                                         |
| Figma                    | ❌ Missing | `figma`                | `iframe`                                                                                                         |
| Google Maps              | ❌ Missing | `maps`                 | `iframe`                                                                                                         |
| Google Drive             | ❌ Missing | `drive`                | Google Docs, Sheets, etc custom embed                                                                            |
| Tweet                    | ✅ Yes     | `tweet`                | Uses the twitter embedding SDK                                                                                   |
| PDF                      | ✅ Yes     | `pdf`                  | Uses S3 signed URLs and [react-pdf](https://github.com/wojtekmaj/react-pdf)                                      |
| Audio                    | ✅ Yes     | `audio`                | Uses S3 signed URLs and [HTML5 `audio` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio) |
| File                     | ✅ Yes     | `file`                 | Uses S3 signed URLs (generic downloadable file)                                                                  |
| Link                     | ✅ Yes     | `text`                 | External links                                                                                                   |
| Page Link                | ✅ Yes     | `page`                 | Link to a notion page in the same workspace                                                                      |
| External Page Link       | ✅ Yes     | `text`                 | Links to a notion page or collection view in another workspace                                                   |
| Code (block)             | ✅ Yes     | `code`                 | Block code syntax highlighting via [prismjs](https://prismjs.com/)                                               |
| Code (inline)            | ✅ Yes     | `text`                 | Inline code formatting (no syntax highlighting)                                                                  |
| Collections              | ✅ Yes     |                        | Also known as [databases](https://www.notion.so/Intro-to-databases-fd8cd2d212f74c50954c11086d85997e)             |
| Collection View          | ✅ Yes     | `collection_view`      | Collections have a 1:N mapping to collection views                                                               |
| Collection View Table    | ❌ Missing | `collection_view`      | `type = "table"` (default table view)                                                                            |
| Collection View Gallery  | ❌ Missing | `collection_view`      | `type = "gallery"` (grid view)                                                                                   |
| Collection View Board    | ❌ Missing | `collection_view`      | `type = "board"` (kanban view)                                                                                   |
| Collection View List     | ❌ Missing | `collection_view`      | `type = "list"` (vertical list view)                                                                             |
| Collection View Calendar | ❌ Missing | `collection_view`      | `type = "calendar"` (embedded calendar view)                                                                     |
| Collection View Page     | ❌ Missing | `collection_view_page` | Collection view as a standalone page                                                                             |

Please let us know if you find any issues or missing blocks.