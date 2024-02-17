import { useState } from 'react'
import debugTool from '../../data/debugtools'
import { FlexIcon, GridIcon, ConsoleIcon, PuzzleIcon, WindowIcon } from '../icons'
import { ToolsGrid } from './ToolsGrid'
import { ToolsRows } from './ToolsRows'
import { useFilters } from '../../hooks/useFilters'
import { FilterButton } from './FilterButton'
import type { DebugToolCategory } from '../../types'
const { tools } = debugTool

export function ToolsShowcase() {
  const [gridDisplay, setGridDisplay] = useState(true)
  const { filter, filterTools, handleClickFilter } = useFilters();
  const filteredTools = filterTools(tools) ?? []
  const categories: DebugToolCategory[] = ['extension', 'built-in', 'webpage']

  return (
    <div className='flex flex-col gap-4'>
      <header className='flex justify-between'>
        <div>
          <ul className='flex gap-2 text-sm'>
            {categories.map((filterOption) => (
              <FilterButton
                isActive={filter.includes(filterOption)}
                hoverName={filterOption}
                key={filterOption}
                onClick={(e) => handleClickFilter(e)}>
                {
                  filterOption === 'webpage'
                    ? <WindowIcon />
                    : (filterOption === 'extension'
                      ? <PuzzleIcon />
                      : <ConsoleIcon />)
                }
              </FilterButton>
            ))}
          </ul>
        </div>
        <div className='flex gap-2'>
          <button
            onClick={() => setGridDisplay(true)}
            className={`${gridDisplay ? "bg-stone-700 rounded-full" : "bg-stone-900 rounded-xl"} p-2 duration-300 transition-colors `}>
            <GridIcon />
          </button>
          <button
            onClick={() => setGridDisplay(false)}
            className={`${!gridDisplay ? "bg-stone-700 rounded-full" : "bg-stone-900 rounded-xl"} p-2 duration-300 transition-colors `}>
            <FlexIcon />
          </button>
        </div>
      </header>
      {
        gridDisplay
          ? <ToolsGrid tools={filteredTools} />
          : <ToolsRows tools={filteredTools} />
      }
    </div>
  )
}
