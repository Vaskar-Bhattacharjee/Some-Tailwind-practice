import { motion } from 'framer-motion'

function SvgPractice() {
  return (
    <div className='w-full mx-auto h-full grid grid-cols-1 md:grid-cols-2 relative'>

        {/* LEFT COLUMN */}
        <div className="w-full flex justify-center items-center relative py-10 md:py-18">
            <div className="w-full flex justify-center items-center relative"> 
                    <div className='flex flex-col justify-between items-center px-2 overflow-visible w-full'>
                        
                        {/* ROW 1 */}
                        <div className='flex w-full justify-start items-center'>
                            {/* 'shrink-0' ensures text doesn't get squashed on small mobiles */}
                            <p className='w-35 mb-16 text-sm flex justify-center items-center gap-2 shrink-0'>
                                <span className=""><Meetings /></span>
                                Meeting Summarizer</p>
                            <TopSvg className='ml-1 text-neutral-300 dark:text-neutral-400'/>
                        </div>

                        {/* ROW 2 */}
                        <div className='flex w-full justify-start items-center -mt-7'>
                            <p className='text-sm w-35 flex justify-center items-center gap-2 shrink-0'> 
                                <span className=""><Code /></span>
                                Code Reviewer</p>
                            <MiddleSvg  className='ml-4 text-neutral-300 dark:text-neutral-400'/>
                        </div>

                        {/* ROW 3 */}
                        <div className='flex w-full justify-start items-end '>
                                <p className='text-sm w-35 flex justify-center items-center gap-2 shrink-0'> 
                                <span className=""><Customer /></span>
                                Code Reviewer</p>
                                <BottomSvg  className='ml-1 mb-3 text-neutral-300 dark:text-neutral-400'/>
                        </div>
                    </div>

            {/* ANIMATED BOX */}
            <div className=" size-12 lg:size-16 z-10 rounded-sm -ml-9 mt-3 sm:-ml-12 lg:-ml-14  bg-neutral-100 relative overflow-hidden p-px shrink-0">
             <motion.div 
             whileHover="animate"
             className="w-full h-full relative z-20 bg-white     dark:bg-neutral-900 rounded-[3px] flex justify-center items-center cursor-pointer " >
                <SVG />            
            </motion.div>   
             <div className="w-full h-full absolute inset-0 scale-[1.4] bg-[conic-gradient(at_center,transparent,var(--color-blue-500),20%,transparent_30%)] animate-spin"></div>
             <div className="w-full h-full absolute inset-0 scale-[1.4] bg-[conic-gradient(at_center,transparent,var(--color-red-500),20%,transparent_30%)] animate-spin [animation-delay:-0.5s]"></div>
           </div> 
            
            </div>
           
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full flex justify-center items-center relative py-18">
           <div className='w-full h-full flex justify-center items-center border border-neutral-200 dark:border-neutral-700'>
                <div className='flex justify-start items-center -ml-50 relative'>
                    <MiddleSvg className='text-neutral-300 dark:text-neutral-400 '/>
                    <Mail className='text-neutral-800 dark:text-neutral-200 absolute size-12 right-50 cursor-pointer' />
                </div> {/* first div */}
                <div></div> {/* second div */}
                <div></div>{/* third div */}
           </div>
        </div>
 
    </div>
  )
}

export default SvgPractice

const TopSvg = ({className, ...props}:{className?: string}) => (
    <svg 
    // width="442" -> Removed to allow CSS control
    height="68" 
    viewBox="0 0 442 68" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`w-full md:w-[442px] h-auto ${className}`}
    {...props}>
    <defs>
    <motion.linearGradient
    gradientUnits='userSpaceOnUse'
    id="gradient"
    x1="0" y1="0" x2="441" y2="0"
    initial={{ x1: -442, x2: 0 }} 
    animate={{ x1: 442, x2: 884 }} 
    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
    >
        <stop offset="0%" stopColor="currentColor" />
         <stop offset="20%" stopColor="#22c55e" />
        <stop offset="40%" stopColor="currentColor" />
        <stop offset="100%" stopColor="currentColor" />
    </motion.linearGradient>
    </defs>
        <path d="M441.5 67.5H440.5V1.5H441.5V67.5ZM440 1H0V0H440V1Z" stroke="url(#gradient)" strokeWidth="1"/>
    </svg>
)

const MiddleSvg = ({className, ...props}:{className?: string}) => (
    <motion.svg 
    height="10" 
    viewBox="0 0 440 10" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`w-full md:w-[444px] h-auto ${className}`}
    {...props}>
        <defs>
            <motion.linearGradient
                id="gradient2" 
                x1="0" y1="0" x2="441" y2="0"
                gradientUnits="userSpaceOnUse"
                initial={{ x1: -440, x2: 0 }} 
                animate={{ x1: 440, x2: 880 }} 
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            >
                <stop offset="0%" stopColor="currentColor" />
                <stop offset="20%" stopColor="#F44336" />
                <stop offset="40%" stopColor="currentColor" />
                <stop offset="100%" stopColor="currentColor" />
            </motion.linearGradient>
        </defs>
        <path d="M0 5H440" stroke="url(#gradient2)" strokeWidth="1" />
    </motion.svg>
);

const BottomSvg = ({className, ...props}:{className?: string}) => (
    <svg 
    height="67" 
    viewBox="0 0 441 67" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`w-full md:w-[441px] h-auto ${className}`}
    {...props}>
        <defs>
            <motion.linearGradient
                gradientUnits="userSpaceOnUse"
                id="gradient3"
                x1="0" y1="0" x2="441" y2="0"
                initial={{ x1: -441, x2: 0 }} 
                animate={{ x1: 441, x2: 882 }} 
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            >
                <stop offset="0%" stopColor="currentColor" />
                <stop offset="20%" stopColor="#3B82F6" />
                <stop offset="40%" stopColor="currentColor" />
                <stop offset="100%" stopColor="currentColor" />
            </motion.linearGradient>
        </defs>
    <path d="M440.5 66H440V66.5H0V65.5H439.5V0H440.5V66Z"
     fill="none"
     stroke="url(#gradient3)"
     strokeWidth='1'/>
    </svg>
)

/* Icons */
const Code = () => (
    <motion.svg initial={{x:0,y:0}} whileHover={{x:-2,y:-2}} transition={{duration:0.2}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#757575" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M14 4l-4 16" /></motion.svg>
)
const Meetings = () => (
    <motion.svg initial={{x:0,y:0}} whileHover={{x:-2,y:-2}} transition={{duration:0.2}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#757575" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 8l-9.383 9.418a2.091 2.091 0 0 0 0 2.967a2.11 2.11 0 0 0 2.976 0l9.407 -9.385" /><path d="M9 3h4.586a1 1 0 0 1 .707 .293l6.414 6.414a1 1 0 0 1 .293 .707v4.586a2 2 0 1 1 -4 0v-3l-5 -5h-3a2 2 0 1 1 0 -4z" /></motion.svg>
)
const Customer = () => (
    <motion.svg initial={{x:0,y:0}} whileHover={{x:-2,y:-2}} transition={{duration:0.2}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#757575" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 14v-3a8 8 0 1 1 16 0v3" /><path d="M18 19c0 1.657 -2.686 3 -6 3" /><path d="M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" /><path d="M15 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" /></motion.svg>
)

const SVG = () => (
<motion.svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="text-neutral-500 dark:text-neutral-400 size-7">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<motion.path variants={{animate: {x: [0, -4, 4, 0]}}} transition={{duration: 0.6,ease: "easeInOut"}} d="M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.11 -.006h4.471z" />
<motion.path variants={{animate: {rotate: [0, 20 , -20, 0]}}} transition={{duration: 0.6,ease: "easeInOut"}} d="M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004z" />
</motion.svg>


)

const Mail = ({className, ...props}
    : {className?: string}
) => (
    <motion.svg xmlns="http://www.w3.org/2000/svg" 
    className={ `fill-white dark:fill-neutral-900 ${className}`}
    whileHover="hover"
    {...props}
    width="40" height="40" viewBox="0 0 24 24"  stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" >
        
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <motion.path 
        initial={{ rotate: 0, scale: 1 }}
        variants={{
            hover: { rotate: 180, scale: 1.2 }
        }}
        transition={{
            type: "tween",
            duration: 0.5,
            ease: "easeInOut"
        }}
        style={{ transformOrigin: '19px 19px' }}
        d="M19 22.5a4.75 4.75 0 0 1 3.5 -3.5a4.75 4.75 0 0 1 -3.5 -3.5a4.75 4.75 0 0 1 -3.5 3.5a4.75 4.75 0 0 1 3.5 3.5" />
        <path d="M11.5 19h-6.5a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5" />
        <path d="M3 7l9 6l9 -6" />
        
        </motion.svg>
)