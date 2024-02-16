import { useState } from 'react'
import debugTool from '../../data/debugtools'
import { FlexIcon, GridIcon } from '../icons'
const { tools } = debugTool

export function ToolsGrid() {
  const [gridDisplay, setGridDisplay] = useState(true)

  return (
    <div className='flex flex-col gap-4'>
      <article className='flex justify-between'>
        <div></div>
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
      <ul>
        {tools.map(tool => (
          <li key={tool.name}>
            <figure>
              <img src={tool.picture} alt="" />
            </figure>
          </li>
        ))}
      </ul>
    </div>
  )
}
