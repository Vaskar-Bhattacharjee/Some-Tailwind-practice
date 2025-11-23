// import { motion } from 'framer-motion'
function SvgPractice() {
  return (
    <div className='w-full h-full flex justify-center items-center relative  '>

        {/*  problem Div Starts */}
        <div className="w-1/2   flex justify-center items-center  relative  py-18"> 
            <div className='flex flex-col justify-between  items-center '>
                <div className='flex  w-full  justify-start items-center'>
                    <p className='w-20 mb-16 text-xl '>hello</p>
                    <TopSvg className='ml-4'/>
                </div>
                <div className='flex  w-full  justify-start items-center'>
                    <p className='text-xl w-20'> hello2</p>
                    <MiddleSvg  className='ml-4 '/>
                </div>
                <div className='flex  w-full justify-start items-end '>
                        <p className='w-20 mt-16 text-xl'> hello2</p>
                        <BottomSvg  className='ml-4 mb-3 '/>
                </div>
            </div>

       <div className="size-16 border-2 rounded-lg absolute right-3 z-20 bg-white "></div>
        </div>
        {/*  problem Div ends */}

         
     
    </div>
  )
}

export default SvgPractice



const TopSvg = ({...props}) => (
    <svg 
    width="442" 
    height="68" 
    viewBox="0 0 442 68" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path d="M441.5 67.5H440.5V1.5H441.5V67.5ZM440 1H0V0H440V1Z" fill="black"/>
    </svg>

)
const MiddleSvg = ({...props}) => (
    <svg 
    width="440" 
    height="1" 
    viewBox="0 0 440 1" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
        <path d="M0 0.5H440" stroke="black"/>
    </svg>
)

const BottomSvg = ({...props}) => (
    <svg 
    width="441" 
    height="67" 
    viewBox="0 0 441 67" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path d="M440.5 66H440V66.5H0V65.5H439.5V0H440.5V66Z" fill="black"/>
    </svg>

)






// const SVG = () => (
// <motion.svg

// xmlns="http://www.w3.org/2000/svg" 
// width="100" 
// height="100" 
// viewBox="0 0 24 24" 
// fill="" 
// stroke="none">

// <path 
// stroke="none" 
// d="M0 0h24v24H0z" 
// fill="none"/>

// <motion.path 
// variants={{
//     animate: {
//         x: [0, -4, 4, 0],
        
//     }
    
// }}
// transition={{
//     duration: 0.6,
//     ease: "easeInOut",
// }}
// d="M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.11 -.006h4.471z" 
// />
// <motion.path 
// variants={{
//     animate: {
//         rotate: [0, 20 , -20, 0]
//     }
// }}
// transition={{
//     duration: 0.6,
//     ease: "easeInOut",
// }}
// d="M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004z" 
// />
// </motion.svg>
 
// )
