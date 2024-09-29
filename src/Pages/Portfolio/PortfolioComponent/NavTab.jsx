import { useContext } from 'react'
import useFetch from '../../../Hooks/useFetch'
import { motion } from "framer-motion"
import { UserContext } from '../../../Hooks/UserContext'
function NavTab() {
    const {data} = useFetch("https://portfolio-server-yyk2.onrender.com/portfolioButtons")
    const {filter, setFilter} = useContext(UserContext);
      const item1 = {
        hidden: { x: -50, opacity: 0 },
        visible: { x: 0, opacity: 1,
          transition: {
            duration: .5,
            delay: .5,
          }
        }
      };
      
  return (
    <div className="w-ful h-[50px] flex flex-wrap gap-3 md:gap-10 items-center mt-5 mb-4 md:mt-3 font-semibold ">
        {
            data.map((dt, index)=>{
                return(
                    <motion.button key={index} variants={item1} initial="hidden" animate="visible" onClick={()=>{setFilter(dt.category)}} className={`${filter === dt.category ? 'dark:text-yellow-500 text-[#c73d3d]' : ''}`}>{dt.value}</motion.button>
                )
            })
        }
    </div> 
  )
}

export default NavTab
