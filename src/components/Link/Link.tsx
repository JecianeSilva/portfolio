import { HTMLAttributes } from "react"
import { tv, VariantProps } from "tailwind-variants"
import LinkPrimitive, { LinkProps as LinkPrimitiveProps } from "next/link"

const link = tv({
  base: [
    "border-b-4 border-transparent text-slate-400 py-3 px-1 flex items-center relative transition-colors",
    "hover:text-white",
    "before:w-0 before:h-[4px] rounded-sm before:bg-sky-500 before:absolute before:-bottom-3 before:left-0 before:duration-[250ms]",
    "hover:before:w-full",
  ],

  variants: {
    variant: {
      default: "text-slate-400",
      selected: "text-white",
    },
  },

  defaultVariants: {
    variant: "default",
  },
})

type LinkProps = LinkPrimitiveProps &
  HTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof link> & {
    label: string
    target?: string
  }

export function Link({
  label,
  className,
  variant,
  ...rest
}: LinkProps) {
  return (
    <LinkPrimitive prefetch={false} className={link({ variant, className })}{...rest}>
      {label}
    </LinkPrimitive>
  )
}