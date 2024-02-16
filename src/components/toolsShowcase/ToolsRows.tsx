import type { DebugTool } from "../../types"
import { LinkArrowIcon } from "../icons"
import { DetailsIcon } from "../icons/DetailsIcon"

type Props = {
  tools: DebugTool[]
}

export function ToolsRows({ tools }: Props) {
  return (
    <ul className='flex flex-col gap-12 items-center divide-y divide-white/30'>
      {tools.map(tool => (
        <li className='max-w-screen-md w-full flex flex-col gap-4' key={tool.name}>
          <header className="flex gap-2 items-center pt-12">
            <h3 className='font-bold text-3xl capitalize text-stone-100'>{tool.name}</h3>
            <span className="text-xs px-2 py-1 rounded-full uppercase bg-stone-800 text-stone-500">{tool.category}</span>
          </header>
          <div className='group relative p-8  *:duration-300 transition-transform'>
            <img
              className='group-hover:-translate-y-2 group-hover:-skew-x-2 group-hover:shadow-2xl z-20 bg-stone-100 absolute left-[16%] top-1/2 w-14 h-14 rounded-full shadow'
              src={tool.pictures.logo}
              alt="" />
            <figure className="relative group-hover:translate-y-2 group-hover:-skew-x-2 flex justify-center">
              <img
                className='w-2/3 h-[285px] rounded-2xl object-cover z-10'
                src={tool.pictures.preview}
                alt="" />
              <img
                className='absolute w-2/3 h-[285px] rounded-2xl object-cover blur-2xl translate-x-4 translate-y-4 opacity-0 group-hover:opacity-20 duration-300 transition-opacity'
                src={tool.pictures.preview}
                alt="" />
            </figure>
          </div>
          <footer className='flex w-full p-4 justify-between items-center gap-4'>
            <article className="flex gap-2">
              <aside className="flex flex-col items-center text-white/30">
                <div className="min-w-fit">
                  <DetailsIcon />
                </div>
                <div className="w-[1px] h-full bg-white/30 mt-1" />
              </aside>
              <p className="w-full text-stone-300 text-justify first-letter:uppercase">{tool.description}{tool.moreDetails}</p>
            </article>
            <a
              href={tool.url}
              target="_blank"
              className='min-w-fit group text-sm px-4 py-2 flex gap-2 items-center uppercase rounded-full bg-stone-900 brightness-75 hover:brightness-100 duration-150 transition' rel="noreferrer">
              try it out
              <div className="group-hover:-translate-y-[2px] duration-150 transition">
                <LinkArrowIcon />
              </div>
            </a>
          </footer>
        </li>
      ))}
    </ul>
  )
}
