'use client'

import { cn } from "../../../lib/utils"

function SignUp() {
  return (
    <form className="w-full h-full bg-gray-100 dark:bg-transparent flex flex-col gap-3  justify-center">
        <h1 className="mb-4 font-bold text-5xl mx-auto bg-clip-text text-transparent bg-linear-to-b from-neutral-500 to-neutral-600
        dark:from-neutral-400 dark:to-neutral-600">This is a {" "}
            <span className=" bg- ">
                Signup
            </span> {" "}
            page
        </h1>
        <div className="flex flex-col mx-auto gap-4">
           <div className="flex flex-col gap-1 mx-auto">
            
             <Label htmlFor="name">Full Name</Label>
             <Input 
             type="text"
             id="name"
             name="name"
             placeholder="John Doe"
             />
           </div>

          <div className="flex flex-col gap-1 mx-auto">
             <Label htmlFor="email">Email:</Label>
             <Input 
             type="email"
             id="email"
             name="email"
             placeholder="H0nYt@example.com"
             />
           </div>
          <div className="flex flex-col gap-1 mx-auto">
               <Label htmlFor="password">Password:</Label>
                <Input 
                type="password"
                id="password"
                name="password"
                placeholder="password"
                />
           </div>
           <Button type="submit">Sign Up</Button>
        </div>

    </form>
  )
}

export default SignUp;

 interface InputProps{
 children?: React.ReactNode,
 className?: string,
 id?: string,
 type?: string,
 name?: string,
 placeholder?: string
}

const Input = ({
  children,
  className,
  id,
  type,
  name,
  placeholder,
  ...props
}: InputProps) => {
  return (
    <input className={cn("w-[400px] h-10 p-2 shadow-input rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 focus:outline-none",
                     "focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-100 dark:focus:ring-offset-neutral-800 focus:ring-neutral-500 dark:focus:ring-neutral-400", className)}
                    type={type}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    {...props}
                    >
      {children}
    </input>
  )
}

const Label = ({
  children,
  className,
  htmlFor,

}: 
  {children: React.ReactNode,
   className?: string,
   htmlFor?: string}) => {
  return (
    <label 
    htmlFor = {htmlFor} 
    className={cn("text-md font-medium", className)}
   >
      {children}
    </label>
  )
}

const Button =({children, type, className , ...props}: {
   children: React.ReactNode,
   type?: "button" | "submit" | "reset",
   className?: string}) => {
  return (
    <button className={cn("w-full h-full border border-neutral-200 dark:border-neutral-700 rounded-md", 
              "px-2 py-2 text-sm font-semibold tracking-wide cursor-pointer text-neutral-300 dark:text-neutral-700 bg-black hover:bg-neutral-700 hover:text-neutral-100 shadow-input dark:bg-neutral-200",
              "hover:-translate-y-0.5 transition duration-150 ease-in-out",
              "active:translate-y-0.5 focus:scale-95", className)}
              type={type}
              {...props}>
      {children}
    </button>
  )
} 
