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
    const innerSpan = event.currentTarget.querySelector('span')
    const filterSelected = innerSpan?.innerText.toLocaleLowerCase() as DebugToolCategory
    filters.includes(filterSelected)
      ? setFilter(filters.filter(filter => filter !== filterSelected))
      : setFilter([...filters, filterSelected])
  }

  return {
    filter: filters,
    filterTools,
    handleClickFilter
  }
}