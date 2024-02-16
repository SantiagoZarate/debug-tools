export interface DebugTool {
  name: string,
  url: string,
  picture: string,
  description: string,
  moreDetails : string,
  category: DebugToolCategory
}

type DebugToolCategory = 'extension' | 'webpage'
