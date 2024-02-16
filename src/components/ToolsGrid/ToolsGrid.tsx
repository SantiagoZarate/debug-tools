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
      <ul className={`grid grid-cols-responsive gap-8`}>
        {tools.map(tool => (
          <a
            href={tool.url}
            target='_blank'
            className='flex flex-col rounded-lg hover:scale-[103%] hover:outline hover:shadow-xl duration-300 transition-all'
            key={tool.name} rel="noreferrer">
            <figure className='p-6 bg-gradient-to-tr from-zinc-950 from-30% to-violet-900'>
              <img
                className='object-cover rounded-3xl w-full h-full'
                src={tool.pictures.preview} alt={`${tool.name} picture`}
                title={tool.name} />
            </figure>
            <article className='flex flex-col gap-2 p-2'>
              <header className='flex gap-2 items-center'>
                <h3 className='capitalize text-xl font-bold'>{tool.name}</h3>
                <span className='text-xs px-3 py-1 bg-stone-900 rounded-full'>{tool.category}</span>
              </header>
              <p className='text-xs'>{tool.description}</p>
            </article>
          </a>
        ))}
      </ul>
    </div>
  )
}
