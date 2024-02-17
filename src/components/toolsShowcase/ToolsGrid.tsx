import type { DebugTool } from "../../types"

type Props = {
  tools: DebugTool[]
}

export function ToolsGrid({ tools }: Props) {
  return (
    <ul className="grid grid-cols-responsive gap-8">
      {tools.map(tool => (
        <a
          href={tool.url}
          target='_blank'
          className='flex items-center rounded-lg hover:scale-[103%] hover:outline bg-stone-900/60 border border-white/30 hover:shadow-xl duration-300 transition-all'
          key={tool.name} rel="noreferrer">
          <figure className='p-6 min-w-fit'>
            <img
              className='rounded-full outline bg-stone-200 object-cover w-[100px] h-[100px]'
              src={tool.pictures.logo} alt={`${tool.name} picture`}
              title={tool.name} />
          </figure>
          <article className='flex flex-col gap-2 p-2'>
            <h3 className='capitalize text-xl font-bold'>{tool.name}</h3>
            <span className='text-xs px-3 py-1 bg-stone-800 rounded-full w-fit'>{tool.category}</span>
            {/* <header className='flex gap-2 items-center'></header> */}
            <p className='text-xs tracking-wide text-stone-400 text-ellipsis'>{tool.description}</p>
          </article>
        </a>
      ))}
    </ul>
  )
}
