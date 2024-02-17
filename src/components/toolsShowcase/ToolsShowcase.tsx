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
      <article className='flex justify-between'>
        <div>
          <ul className='flex gap-2 text-sm'>
            {categories.map((filterOption) => (
              <FilterButton
                isActive={filter.includes(filterOption)}
                hoverName={filterOption}
                key={filterOption}
                id={filterOption}
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
          {/* <ul className='flex gap-2 text-sm'>
            <FilterButton
              isActive={filter.includes('extension')}
              id='extension'
              onClick={(e) => handleClickFilter(e)}>
              <PuzzleIcon />
            </FilterButton>
            <FilterButton
              isActive={filter.includes('built-in')}
              id='built-in'
              onClick={(e) => handleClickFilter(e)}>
              <ConsoleIcon />
            </FilterButton>
            <FilterButton
              isActive={filter.includes('webpage')}
              id='webpage'
              onClick={(e) => handleClickFilter(e)}>
              <WindowIcon />
            </FilterButton>
          </ul> */}
        </div>
        <div className='flex gap-4'>
          <button
            onClick={() => setGridDisplay(true)}
            className={`${gridDisplay ? "bg-stone-800" : "bg-stone-900"} p-2 rounded-xl duration-150 transition-colors `}>
            <GridIcon />
          </button>
          <button
            onClick={() => setGridDisplay(false)}
            className={`${!gridDisplay ? "bg-stone-800" : "bg-stone-900"} p-2 rounded-xl duration-150 transition-colors `}>
            <FlexIcon />
          </button>
        </div>
      </article>
      {
        gridDisplay
          ? <ToolsGrid tools={filteredTools} />
          : <ToolsRows tools={filteredTools} />
      }
    </div>
  )
}
