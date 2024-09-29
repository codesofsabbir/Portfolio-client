import React from 'react'
import {Helmet} from "react-helmet";
import "./Blogs.css"
import Footer from '../../Components/Footer';
import BlogsItem from './BlogsComponent/BlogsItem';
import { motion } from "framer-motion"
import Pagination from './BlogsComponent/Pagination';
import useFetch from '../../Hooks/useFetch';
function Blogs() {
  const title = {
    hidden: {y:-30, opacity: 0},
    visible: {y:0, opacity: 1,
      transition:{
        duration:.3,
        delay:.5
      }
    }
  }
  const {data} = useFetch("blogs");
  return (
    <div className='w-full mt-[70px] lg:mt-8 mx-2 md:mx-8 overflow-x-auto   scrollBarHide'>
      <Helmet>
          <title>Blogs </title>
      </Helmet>
      <div>
        <motion.h2 variants={title} initial="hidden" animate="visible" className=' text-lg font-semibold dark:text-white text-black'>My Blogs</motion.h2>
        <BlogsItem data={data}/>
        <Pagination data={data}/>
      </div> 
      <Footer />
    </div>
  )
}

export default Blogs

