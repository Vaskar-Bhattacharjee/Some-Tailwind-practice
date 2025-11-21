import { cn } from "../../../lib/utils"
import Image from "next/image"
function TailwindComp() {
  return (
    <div className={cn(
        'w-full rounded-2xl min-h-100 bg-neutral-100 dark:bg-neutral-900 mx-auto flex items-center justify-center',
        'bg-[radial-gradient(var(--color-neutral-200)_1px,transparent_1px)] dark:bg-[radial-gradient(transparent_1px,var(--color-neutral-800)_1px)] bg-size-[10px_10px]',
        )}>
        <div className={cn(
            "size-40 relative cursor-pointer shadow-2xl bg-neutral-300 dark:bg-neutral-700 rounded-2xl",
            'bg-[radial-gradient(#E5E5E5_1px,transparent_1px)] dark:bg-[radial-gradient(transparent_1px,var(--color-neutral-900)_1px)] bg-size-[10px_10px]',
            "perspective-distant"
        )}>
            <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             alt="biu"
             fill
             className={cn(
              "w-full h-full object-cover rounded-2xl",
              "transform rotate-x-20 -rotate-y-20 rotate-z-20 -translate-z-10 scale-105 shadow-2xl  origin-center",
              "hover:rotate-x-0 hover:rotate-y-0 hover:rotate-z-0 hover:translate-z-0 hover:scale-100 over:shadow-none ease-in-out duration-300"
             )} />
        </div>
    </div>
  )
}

export default TailwindComp