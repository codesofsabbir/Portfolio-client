import useFetch from '../../../Hooks/useFetch'
import {  motion } from "framer-motion"
function Services() {
    const {data} = useFetch("https://portfolio-server-yyk2.onrender.com/services")
    const container = {
        hidden: { opacity: 0},
        visible: { opacity: 1}
      }
      const item = {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1,
          transition: {
            duration: .7,
            delay: 0.8,
          }
        }
      };
  return (
    <motion.div variants={container} initial="hidden" animate="visible" className="w-full mt-6 grid sm:grid-col-1 md:grid-cols-3 lg:grid-cols-3 gap-3">
        {data.map((dt, index)=>{
            return(
                <motion.div key={index} variants={item} className="px-4 py-6 dark:bg-[#2c2c38] bg-[#96A8A6]">
                <h2 className=' text-[14px] font-semibold dark:text-white text-[#181818] mb-4'>{dt.title}</h2>
                <ul className='mb-4'>
                    {
                        (dt.details).map((li, index)=>{
                            return(
                                <li key={index} className='text-[#C74D4D] dark:text-yellow-500'><span className='text-gray-600 dark:text-[#8c8c8e]'>{li}</span></li>
                            )
                        })
                    }
                </ul>
                <p className="dark:text-yellow-500 text-[#C74D4D]  cursor-pointer font-semibold flex items-center"><span>ORDER NOW</span> <span className='text-[18px] pl-1'> &gt;</span></p>
            </motion.div>
            )
        })}
            
    </motion.div>
  )
}

export default Services