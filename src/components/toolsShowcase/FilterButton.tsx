import type { ComponentProps, PropsWithChildren } from "react"

type Props = PropsWithChildren & ComponentProps<'button'> & {
  isActive: boolean
}

export function FilterButton({ isActive, children, ...args }: Props) {
  return (
    <button
      {...args}
      className={`${isActive ? "bg-stone-600" : "bg-stone-800"} p-2 rounded-lg uppercase duration-150 transition`}>
      {children}
    </button>
  )
}
