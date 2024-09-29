import React, { useContext } from 'react'
import { motion } from "framer-motion"
import { UserContext } from '../../../Hooks/UserContext';
function Pagination({data}) {
  const {blogPage, setBlogPage, limit} = useContext(UserContext);
    const item1 = {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1,
          transition: {
            duration: .5,
            delay: .9,
          }
        }
      };
      let pages = [];
      let totalposts = data.length;
      let postPerPage = limit;
      for(let i=1; i<= Math.ceil(totalposts/postPerPage); i++){
        pages.push(i);
      }
  return (
    <>
        <motion.div variants={item1} initial="hidden" animate="visible" className="mx-auto w-3/4 h-[50px] flex justify-evenly rounded-2xl items-center mt-10 dark:bg-[#2c2c38] bg-[#96A8A6] px-5">
            {pages.map((page, index)=>{
              return <button key={index} className={`py-3 px-5  rounded-md font-semibold ${blogPage === page ? 'border dark:border-yellow-500 dark:text-yellow-500 text-[#c73d3d] border-[#c73d3d]' : ''}`} onClick={()=>setBlogPage(page)}>{page}</button>
            })}
        </motion.div> 
    </>
  )
}

export default Pagination


