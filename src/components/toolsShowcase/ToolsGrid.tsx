import type { DebugTool } from "../../types"

type Props = {
  tools: DebugTool[]
}

export function ToolsGrid({ tools }: Props) {
  return (
    <ul className="grid grid-cols-responsive gap-8 ">
      {tools.map(tool => (
        <a
          href={tool.url}
          target='_blank'
          className='flex flex-col rounded-lg hover:scale-[103%] hover:outline hover:shadow-xl duration-300 transition-all'
          key={tool.name} rel="noreferrer">
          <figure className='p-6 bg-gradient-to-tr from-zinc-950 from-30% to-violet-900'>
            <img
              className='mx-auto rounded-full outline bg-stone-200 object-cover w-[100px] h-[100px]'
              src={tool.pictures.logo} alt={`${tool.name} picture`}
              title={tool.name} />
          </figure>
          <article className='flex flex-col gap-2 p-2'>
            <header className='flex gap-2 items-center'>
              <h3 className='capitalize text-xl font-bold'>{tool.name}</h3>
              <span className='text-xs px-3 py-1 bg-stone-900 rounded-full'>{tool.category}</span>
            </header>
            <p className='text-xs tracking-wide text-stone-400'>{tool.description}</p>
          </article>
        </a>
      ))}
    </ul>
  )
}
