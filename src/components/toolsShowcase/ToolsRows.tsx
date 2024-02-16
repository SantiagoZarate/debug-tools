import type { DebugTool } from "../../types"

type Props = {
  tools: DebugTool[]
}

export function ToolsRows({ tools }: Props) {
  return (
    <ul className='flex flex-col gap-12 items-center'>
      {tools.map(tool => (
        <li className='max-w-screen-md w-full flex flex-col gap-4' key={tool.name}>
          <header>
            <h3 className='font-bold text-3xl capitalize'>{tool.name}</h3>
          </header>
          <div className='group relative p-8 *:duration-300 transition-transform'>
            <img
              className='group-hover:-translate-y-2 z-10 absolute left-[16%] top-1/2 w-14 h-14 rounded-full shadow-md'
              src={tool.pictures.logo}
              alt="" />
            <img
              className='group-hover:translate-y-2 m-auto w-2/3 rounded-2xl object-cover'
              src={tool.pictures.preview}
              alt="" />
          </div>
          <footer className='flex p-4 justify-between items-center gap-4'>
            <p>{tool.description}{tool.moreDetails}</p>
            <button className='text-sm px-4 py-2 uppercase rounded-full bg-stone-900'>
              try it out!
            </button>
          </footer>
        </li>
      ))}
    </ul>
  )
}
