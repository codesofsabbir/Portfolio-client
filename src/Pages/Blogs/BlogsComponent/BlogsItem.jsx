import React, { useContext, useEffect, useState } from 'react'
import BlogPic from '../../../Components/images/bg.jpg'
import { motion, AnimatePresence  } from "framer-motion"
import { UserContext } from '../../../Hooks/UserContext';
function BlogsItem({data}) {
  const {blogPage, limit} = useContext(UserContext);
  const [currentPosts, setCurrentPosts] = useState([]);
    const item1 = {
        hidden: { x: -30, opacity: 0 },
        visible: { x: 0, opacity: 1,
          transition: {
            duration: .5,
            delay: .7,
          }
        }
      };
    
    useEffect(()=>{
      const lastPostIndex = blogPage * limit;
    const firstPostIndex = lastPostIndex - limit;
    setCurrentPosts(data.slice(firstPostIndex, lastPostIndex));
    }, [data, blogPage, limit])
  return (
    <motion.div variants={item1} initial="hidden" animate="visible" className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence>
        {
            currentPosts.map((dt, index)=>{
                return(
                    <div key={index}>
                        <div className='w-full overflow-hidden'>
                        <img src={BlogPic} alt="" className='blogItemImage cursor-pointer' />
                        </div>
                        <div className="w-full dark:bg-[#2c2c38] bg-[#96A8A6] p-3 flex flex-col gap-1">
                        <h2 className='dark:text-white text-black text-base'>{dt.title}</h2>
                        <p className=' text-justify'>{dt.des}</p>
                        <p className="dark:text-yellow-500 text-[#c73d3d] cursor-pointer font-semibold flex items-center"><span>Read More</span> <span className='text-[18px] pl-1'> &gt;</span></p>
                        </div>
                    </div>
                )
            })
        }
        </AnimatePresence>
        </motion.div>
  )
}

export default BlogsItem