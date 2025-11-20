'use client';
import { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";
import { Send } from 'lucide-react';




export default function Home() {

  

  return (
    <div className="w-full  h-full  ">
      <div className=" w-full mx-auto h-full flex flex-col items-center justify-center gap-2 ">
        <h1 className=" text-3xl mt-10 tracking-tight font-bold text-neutral-700 dark:text-neutral-200 ">Welcome to My App</h1>
        <p className=" text-md text-neutral-600 dark:text-neutral-300 tracking-tight mb-4 ">
          This is the home page of your Next.js application with a dark mode toggle.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 min-h-full w-full gap-4
         md:divide-x md:divide-y divide-neutral-200 dark:divide-neutral-700 ">
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
              hello brother
            </CardSkeleton>
          </Card>

          <Card > 
            <CardHeader>
               <CardTitle>
                Text to workflow builde
               </CardTitle>
            </CardHeader>
            <CardDescription>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse asperiores quam voluptates adipisci rem consequatur eaque .
            </CardDescription>
            <CardSkeleton >
              <MainSkeleton />
              
            </CardSkeleton>
          </Card>

           <Card className=" col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2" >
            <CardHeader>
               <CardTitle>
                Text to workflow builder
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
    <div className={cn(
      "min-h-60 w-full bg-[radial-gradient(#E5E5E5_1px,transparent_1px)] dark:bg-[radial-gradient(#363438,transparent_1px)]  bg-size-[10px_10px] ", 
      className
    )}>
      {children}
    </div> 
  )
}

const MainSkeleton = ({children, className}: {children?: React.ReactNode, className?: string}) => {
   
   const [input, setInput] = useState('');
   const messagesEndRef = useRef<HTMLDivElement>(null);
    const chatContainerRef = useRef<HTMLDivElement>(null);
   const [chat, setChat] = useState(
    [
      { 
        role: 'user',
        text: 'Hello, can you help me with my project?'
      },
      {      
        role: 'assistant',
        text: 'Sure! What do you need help with?'
      },
      {      
        role: 'user',
        text: 'I need help with designing a workflow for my application.'
      },
      {      
        role: 'assistant',
        text: 'I can help you with that! What kind of application are you building?'
      },
   ]
    );
    
    const dummyResponse = "This is a dummy reply. I am typing this out live so it looks like real AI!";

   const HandleMessage = (input: string) => {
    if(!input.trim()) return;
    setChat(prev => [...prev, { role: 'user', text: input }]);
    setInput('');
    setTimeout(() => {
        setChat(prev => [...prev, { role: 'assistant', text: '' }]);

        //Start filling it with text
        let i = 0;
        const interval = setInterval(() => {
            setChat(prev => {
                const newChat = [...prev];
                const lastIndex = newChat.length - 1;

                // We update the LAST message, keeping the role as 'assistant'
                newChat[lastIndex] = {
                    role: 'assistant', // <--- CRITICAL: Keeps it as an AI Message
                    text: dummyResponse.slice(0, i + 1)
                };
                
                return newChat;
            });

            i++;
            if (i === dummyResponse.length) clearInterval(interval);
        }, 30); // Typing speed
    }, 1000);
   }

   const UserMessage = ({text}: {text: string}) => {
    return (
    <div className="flex justify-end mb-2 px-4">
        <div className="max-w-[60%] px-2 py-2 bg-blue-500 text-white text-sm 
                        rounded-tl-xl rounded-tr-lg rounded-bl-xl rounded-br-lg wrap-break-word">
           <p>{text}</p>
        </div>
    </div>
    )
   }

    const AIMessage = ({text}: {text: string}) => {
    return (
    // FIX 1: Wrap the whole chat bubble with a div that aligns content to the left
    <div className="flex justify-start mb-4 px-4"> 
        {/* FIX 2 & 3: Apply the styling (bg, radius, padding) directly to the div holding the text */}
        <div className="max-w-[60%] px-3 py-1 bg-neutral-300 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 text-sm
                        rounded-tl-lg rounded-tr-xl rounded-bl-lg rounded-br-xl wrap-break-word">
           <p>{text}</p>
        </div>
    </div>
    )
   }

   const scrollToBottom = () => {
    if (chatContainerRef.current) {
        const scrollContainer = chatContainerRef.current;
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
   };

   useEffect(() => {
      scrollToBottom();
   }, [chat]);
  
  return (
    <div className={cn(
      "h-[400px] flex flex-col w-full   mt-4 px-12 pt-12 relative bg-gray-50 border border-gray-200 rounded-lg mx-auto dark:border-gray-700", // Added padding and overflow for chat view
      className
    )}>

        <div className="p-4 absolute top-0 left-0 right-0 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shrink-0">
         <div className="flex items-center gap-2">
             <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
             <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Assistant Online</span>
         </div>
      </div>
    
    <div className=" flex-1 mt-5 overflow-y-auto px-2  "
     ref={chatContainerRef}
     style={{ scrollBehavior: 'smooth' }}
     >

      { chat.map((message, index) => (
        
           message.role === 'user' ? (
          <UserMessage key={index} text={message.text} />
        ) : (
          <AIMessage key={index} text={message.text} />
        )
       
     ))
      }
      <div ref={messagesEndRef} />


    </div>
     

        <div className="w-[calc(100%-3rem)] flex items-center justify-between bg-neutral-50 dark:bg-neutral-900 pt-1 pb-2
                  mt-5 mb-2 mx-auto border border-neutral-400 dark:border-neutral-700 rounded-md 
                    inset-x-0 text-xs sticky bottom-0 left-0 right-0 ">
        
        <form className="w-full flex items-center justify-between ">
            <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message here."
                  className="w-full md:w-full lg:w-[calc(100%-8rem)] p-2 focus:outline-none bg-transparent flex-1  "
                  />
              <button
                type="submit"
                onClick={(e)=>{
                  e.preventDefault();
                  HandleMessage(input);
                }}
                className="p-2 mr-2 bg-blue-500 hover:bg-blue-600 rounded-md cursor-pointer text-white"
              >
                <Send size={16} />
              </button>
        </form>

      </div>


    </div> 
  )
}





