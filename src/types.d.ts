export interface DebugTool {
  name: string,
  url: string,
  description: string,
  moreDetails: string,
  category: DebugToolCategory
  pictures: {
    preview: string,
    logo: string
  },
}

type DebugToolCategory = 'extension' | 'webpage' | 'built-in'
