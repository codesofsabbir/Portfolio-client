import useFetch from '../../../Hooks/useFetch'
import { motion } from "framer-motion"
function Work() {
  const {data} = useFetch("https://portfolio-server-yyk2.onrender.com/work");
  const title = {
    hidden: {x:-30, opacity: 0},
    visible: {x:0, opacity: 1,
      transition:{
        duration:.3,
        delay:1
      }
    }
  }
  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1,
      transition: {
        duration: .7,
        delay: 1.2,
      }
    }
  };
  return (
    <div>
            <motion.h2 variants={title} initial="hidden" animate="visible" className=' text-lg font-semibold dark:text-white text-black mt-10 md:mt-0'>Work History</motion.h2>
              <motion.div variants={item} initial="hidden" animate="visible" className="educationLists mt-6">
              <div className='flex flex-col gap-8 w-[85%]'>
                {
                  data.map((dt, index)=>{
                    return(
                      <div key={index} className="w-full dark:bg-[#2c2c38] bg-[#96A8A6] p-5 dark:after:bg-[#2c2c38] after:bg-[#96A8A6] dark:before:border-[#FFC107] before:border-[#C74D4D] educationBox">
                  <div className="flex justify-between items-center">
                    <h2 className='text-[13px] font-medium dark:text-white text-black'>{dt.title}</h2>
                    <div className="px-4 py-1 rounded-full dark:bg-[#191923] bg-[#BCD2D0]"><span>{dt.year}</span></div>
                  </div>
                  <i className='text-[10px] dark:text-yellow-500 text-[#C74D4D]'>{dt.address}</i>
                  <div className='mt-7 mb-5 flex flex-col gap-2'>
                    <h1 className='font-medium dark:text-white text-black'>Institute: <span className='dark:text-[#8c8c8e] text-gray-600'>{dt.institute}</span></h1>
                    <h1 className='font-medium dark:text-white text-black'>Time: <span className='dark:text-[#8c8c8e] text-gray-600'>{dt.time}</span></h1>
                  </div>
                </div>
                    )
                  })
                }
            </div>
              </motion.div>
          </div>
  )
}

export default Work