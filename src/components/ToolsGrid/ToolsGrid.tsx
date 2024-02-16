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
      <ul className={`grid grid-cols-responsive gap-4`}>
        {tools.map(tool => (
          <li
            className='flex flex-col'
            key={tool.name}>
            {/* <figure className=''>
              <img
                className='object-cover w-full h-full'
                src={"https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"} alt={`${tool.name} picture`}
                title={tool.name} />
            </figure> */}
            <h3 className='capitalize'>{tool.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  )
}
