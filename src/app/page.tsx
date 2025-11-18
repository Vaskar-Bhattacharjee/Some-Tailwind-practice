'use client';
import { cn } from "../../lib/utils";



export default function Home() {

  

  return (
    <div className="w-full  h-full  ">
      <div className=" w-full mx-auto h-full flex flex-col items-center justify-center gap-2 ">
        <h1 className=" text-3xl tracking-tight font-bold text-neutral-700 dark:text-neutral-200 ">Welcome to My App</h1>
        <p className=" text-md text-neutral-600 dark:text-neutral-300 tracking-tight mb-4 ">
          This is the home page of your Next.js application with a dark mode toggle.
        </p>

        <div className="grid grid-cols-2 h-full
         divide-x divide-y divide-neutral-200 dark:divide-neutral-700">
          <Card >
            <CardHeader>
               <CardTitle>
                LLM Model Selector
               </CardTitle>
            </CardHeader>
            <CardDescription>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse asperiores quam voluptates adipisci rem consequatur eaque repellat excepturi non animi.
            </CardDescription>
            <CardSkeleton>
              hello
            </CardSkeleton>
          </Card>

          <Card > 
            <CardHeader>
               <CardTitle>
                LLM Model Selector
               </CardTitle>
            </CardHeader>
            <CardDescription>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse asperiores quam voluptates adipisci rem consequatur eaque repellat excepturi non animi.
            </CardDescription>
            <CardSkeleton>
              hello
            </CardSkeleton>
          </Card>

           <Card className="col-span-2" >
            <CardHeader>
               <CardTitle>
                LLM Model Selector
               </CardTitle>
            </CardHeader>
            <CardDescription>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse asperiores quam voluptates adipisci rem consequatur eaque repellat excepturi non animi.
            </CardDescription>
            <CardSkeleton>
              hello
            </CardSkeleton>
          </Card>


        </div>
        
      </div>


   </div>
    
  )
}
const Card = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <div className={cn("bg-neutral-50 dark:bg-neutral-900 p-4   ", className)}>
      {children}
    </div>
  )
}
const CardHeader = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <div className={cn("mb-2", className)}>
      {children}
    </div>

  )
}
const CardTitle = ({children, className}: {children: React.ReactNode, className?: string}) => {
  return (
    <h2 className={cn("text-medium tracking-tight font-semibold mb-1", className)}>
      {children}
    </h2>
  )
}

const CardDescription = ({children, className}: {children: React.ReactNode, className?: string}) => {
   return (
    <p className={cn("text-xs text-neutral-600 dark:text-neutral-300", className)}>
      {children}
    </p>
  )
}

const CardSkeleton = ({children, className}: {children: React.ReactNode, className?: string}) => {
   return (
    <p className={cn(
      "min-h-40 w-full bg-[radial-gradient(#E5E5E5_1px,transparent_1px)] dark:bg-[radial-gradient(#383838_1px,transparent_1px)]  bg-size-[10px_10px] bg-gray-50 mask-l-from-50% mask-r-from-50%  dark:bg-gray-800 dark:mask-l-from-50% dark:mask-r-from-50% ", 
      className
    )}>
      {children}
    </p>
  )
}





