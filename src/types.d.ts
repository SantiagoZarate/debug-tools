export interface DebugTool {
  name: string,
  url: string,
  picture: string,
  description: string,
  category: DebugToolCategory
}

type DebugToolCategory = 'extension' | 'webpage'
