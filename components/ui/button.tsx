import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-bold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive uppercase tracking-wide",
  {
    variants: {
      variant: {
        locked: "bg-neutral-200 text-primary-foreground hover:bg-neutral-200/90 border-neutral-400 border-b-4 active:border-b-0",
        default: "bg-white text-black boarder-slate-200 border-2 border-b-4 active:border-b-2 hover:bg-slate-100 text-slate-500",
        primary: "bg-[#8AAEC0] text-primary-foreground hover:bg-[#6E8FA6] border-[#6E8FA6] border-b-4 active:border-b-0",
        primaryOutline: "bg-[#F4F6F8] text-[#213448] hover:bg-[#E6EDF2] border-[#C9DCE6] border-b-4 active:border-b-0",
        secondary: "bg-[#90AB8B] text-primary-foreground hover:bg-[#789E88] border-[#789E88] border-b-4 active:border-b-0",
        secondaryOutline: "bg-[#F4F6F5] text-[#5A7863] hover:bg-[#E6EFEA] border-[#B8CFC4] border-b-4 active:border-b-0",
        danger: "bg-[#FF5C5C] text-primary-foreground hover:bg-[#E54848] border-[#E54848] border-b-4 active:border-b-0",
        dangerOutline: "bg-[#F6F4F4] text-[#D73535] hover:bg-[#F0E6E6] border-[#E6B5B5] border-b-4 active:border-b-0",
        super: "bg-[#F6D66A] text-primary-foreground hover:bg-[#E8BE55] border-[#E8BE55] border-b-4 active:border-b-0",
        superOutline:"bg-[#F7F6F1] text-[#C89B3C] hover:bg-[#F0EAD6] border-[#E6D8A8] border-b-4 active:border-b-0",
        ghost: "bg-transparent text-slate-500 border-trasnparent border-0 hover:bg-slate-100",
        sidebar: "bg-transparent text-slate-500 border-transparent hover:bg-slate-100 transition-none",
        sidebarOutline: "bg-[#8AAEC0]/15 text-[#6E8FA6] border-[#8AAEC0]/40 border-2 hover:bg-[#8AAEC0]/25 transition-colors"
      },
      size: {
        default: "h-11 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-12 px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
        rounded: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default", 
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
