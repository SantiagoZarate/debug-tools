import { useState } from "react"
import type { DebugTool, DebugToolCategory } from "../types";

export function useFilters() {
  const [filters, setFilter] = useState<DebugToolCategory[]>([]);

  const filterTools = (tools: DebugTool[]) => {
    if (filters.length === 0) return tools

    return tools.filter(tool => {
      if (filters.includes(tool.category)) {
        return tool
      }
    })
  }

  const handleClickFilter = (event: React.MouseEvent) => {
    const buttonID = event.currentTarget.getAttribute('id') as DebugToolCategory
    filters.includes(buttonID)
      ? setFilter(filters.filter(filter => filter !== buttonID))
      : setFilter([...filters, buttonID])
  }

  return {
    filter: filters,
    filterTools,
    handleClickFilter
  }
}