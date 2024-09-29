import React from 'react'
import useFetch from '../Hooks/useFetch'
import { motion } from "framer-motion"
import CountUp from 'react-countup';
function Accomplishments() {
    const {data} = useFetch("accomplishments")
    const container = {
      hidden: { opacity: 0},
      visible: { opacity: 1}
    }
    const item = {
      hidden: { x: 30, opacity: 0 },
      visible: { x: 0, opacity: 1,
        transition: {
          duration: .7,
          delay: 0.8,
        }
      }
    };
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="visible"
      className="w-full mt-6 grid sm:grid-cols-2 md:grid-cols-4">
        {data.map((dt, index)=>{
          return(
            <motion.div variants={item} className='flex justify-center items-center gap-10 md:gap-6' key={index}>
              <h2 className='dark:text-[#FFC107] text-[#C74D4D] font-semibold text-[20px]'>0<CountUp delay={1.2} end={dt.number} duration={3} />{dt.plus}</h2>
              <h2 className='dark:text-white text-black'>{dt.title}</h2>
            </motion.div>
          )
        })}
    </motion.div>
  )
}

export default Accomplishments
