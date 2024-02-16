import { useState } from 'react'
import debugTool from '../../data/debugtools'
import { FlexIcon, GridIcon, WindowIcon, ConsoleIcon, PuzzleIcon } from '../icons'
import { ToolsGrid } from './ToolsGrid'
import { ToolsRows } from './ToolsRows'
const { tools } = debugTool

export function ToolsShowcase() {
  const [gridDisplay, setGridDisplay] = useState(true)


  return (
    <div className='flex flex-col gap-4'>
      <article className='flex justify-between'>
        <div>
          <ul className='flex gap-2 text-sm'>
            <button className='p-2 bg-stone-800 rounded-lg uppercase'>all</button>
            <button className='p-2 bg-stone-800 rounded-lg uppercase'>
              <PuzzleIcon />
            </button>
            <button className='p-2 bg-stone-800 rounded-lg uppercase'>
              <ConsoleIcon />
            </button>
            <button className='p-2 bg-stone-800 rounded-lg uppercase'>
              <WindowIcon />
            </button>
          </ul>
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
          ? <ToolsGrid tools={tools} />
          : <ToolsRows tools={tools} />
      }
    </div>
  )
}
