import useFetch from '../../../Hooks/useFetch'
import { motion } from "framer-motion"
function Personalinfo() {
    const {data} = useFetch("https://portfolio-server-yyk2.onrender.com/contact")
    const title = {
      hidden: {x:-30, opacity: 0},
      visible: {x:0, opacity: 1,
        transition:{
          duration:.3,
          delay:.5
        }
      }
    }
    const item1 = {
      hidden: { y: 30, opacity: 0 },
      visible: { y: 0, opacity: 1,
        transition: {
          duration: .5,
          delay: .5,
        }
      }
    };
    const item2 = {
      hidden: { y: 30, opacity: 0 },
      visible: { y: 0, opacity: 1,
        transition: {
          duration: .5,
          delay: .7,
        }
      }
    };
    const item3 = {
      hidden: { y: 30, opacity: 0 },
      visible: { y: 0, opacity: 1,
        transition: {
          duration: .5,
          delay: .9,
        }
      }
    };
  return (
    <div>
              <motion.h2 variants={title} initial="hidden" animate="visible" className=' text-lg font-semibold dark:text-white text-black'>Education</motion.h2>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  <motion.div variants={item1} initial="hidden" animate="visible" className="w-full dark:bg-[#2c2c38] bg-[#96A8A6] p-10 flex flex-col gap-1">
                    <div className="flex justify-between items-center">
                      <h2 className='text-[13px] font-medium dark:text-white text-black'>Country:</h2>
                      <h2 className='dark:text-white text-white'>{data.country}</h2>
                    </div>
                    <div className="flex justify-between items-center">
                      <h2 className='text-[13px] font-medium dark:text-white text-black'>City:</h2>
                      <h2 className='dark:text-white text-white'>{data.city}</h2>
                    </div>
                    <div className="flex justify-between items-center">
                      <h2 className='text-[13px] font-medium dark:text-white text-black'>District:</h2>
                      <h2 className='dark:text-white text-white'>{data.district}</h2>
                    </div>
                  </motion.div>
                  <motion.div variants={item2} initial="hidden" animate="visible" className="w-full dark:bg-[#2c2c38] bg-[#96A8A6] p-10 flex flex-col gap-1">
                    <div className="flex justify-between items-center">
                      <h2 className='text-[13px] font-medium dark:text-white text-black'>Email:</h2>
                      <h2 className='dark:text-white text-white'>{data.email}</h2>
                    </div>
                    <div className="flex justify-between items-center">
                      <h2 className='text-[13px] font-medium dark:text-white text-black'>Instagram:</h2>
                      <h2 className='dark:text-white text-white'>{data.instagram}</h2>
                    </div>
                    
                  </motion.div>
                  <motion.div variants={item3} initial="hidden" animate="visible" className="w-full dark:bg-[#2c2c38] bg-[#96A8A6] p-10 flex flex-col gap-1">
                    <div className="flex justify-between items-center">
                      <h2 className='text-[13px] font-medium dark:text-white text-black'>Mobile:</h2>
                      <h2 className='dark:text-white text-white'>{data.mobile}</h2>
                    </div>
                    <div className="flex justify-between items-center">
                      <h2 className='text-[13px] font-medium dark:text-white text-black'>Whatsapp:</h2>
                      <h2 className='dark:text-white text-white'>{data.whatsapp}</h2>
                    </div>
                    <div className="flex justify-between items-center">
                      <h2 className='text-[13px] font-medium dark:text-white text-black'>Telegram:</h2>
                      <h2 className='dark:text-white text-white'>{data.telegram}</h2>
                    </div>
                  </motion.div>
              </div>
    </div>
  )
}

export default Personalinfo