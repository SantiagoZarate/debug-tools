import type { ComponentProps, PropsWithChildren } from "react"

type Props = PropsWithChildren & ComponentProps<'button'> & {
  isActive: boolean,
  hoverName: string
}

export function FilterButton({ isActive, hoverName, children, ...args }: Props) {
  return (
    <button
      {...args}
      className={`${isActive ? "bg-stone-600" : "bg-stone-800"} relative p-2 rounded-lg uppercase duration-150 transition group`}>
      <span className="absolute text-xs px-4 py-2 rounded-full bg-stone-900 top-[125%] left-0 pointer-events-none opacity-0 group-hover:opacity-100 duration-150 transition min-w-full">{hoverName}</span>
      {children}
    </button>
  )
}
