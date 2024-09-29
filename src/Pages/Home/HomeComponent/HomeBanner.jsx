import Profile from '../../../Components/images/me.png'
import useFetch from '../../../Hooks/useFetch'
import { motion } from "framer-motion"
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect/dist/core';
function HomeBanner() {
    useEffect(()=>{
        new Typewriter('#typewriter', {
            strings: ['web interface.', 'wordpress website.', 'blogger website.', 'excel dashboard.','PowerPoint presentation.'],
            autoStart: true,
            loop: true
          });
        new Typewriter('#typewrite', {
            strings: [' web interface.', ' wordpress website.', ' blogger website.', ' excel dashboard.',' PowerPoint presentation.'],
            autoStart: true,
            loop: true
          });
    }, [])
    const {data} = useFetch("https://portfolio-server-yyk2.onrender.com/homeBanner");
    console.log(data);
    const navigator = useNavigate();
  return (
    <motion.div 
        variants={{
            hidden:{opacity:0, y:25},
            visible:{opacity:1, y:0},
        }}
        initial="hidden"
        animate="visible" 
        transition={{duration: 0.5, delay: 0.5}} 
        className="bg w-full h-[400px] md:h-[300px]">
            <div className="details">
                <div className='bgOverlay'>
                    <div className='w-full'>
                        <h1 className='text-[#fafafc] text-[25px] md:text-[32px] font-extrabold md:leading-10 mb-4'>{data?.title}</h1>
                        <p className='text-white text-md md:text-lg code mb-6 hidden lg:flex'>&lt;<span className='dark:text-[#FFC107] text-[#C74D4D]'>code</span>&gt; I build  <span id='typewriter' className='inline-block md:ml-3'> </span>&lt;/<span className='dark:text-[#FFC107] text-[#C74D4D]'>code</span>&gt;</p>
                        <p className='text-white text-md md:text-lg code mb-6 lg:hidden'> I build <span id='typewrite' > </span></p>
                        <button className='py-3 px-5 dark:bg-[#FFC107] bg-[#C74D4D] text-[#20202a] text-[11px] font-semibold' onClick={()=>navigator('/portfolio')}>EXPLORE NOW</button>
                    </div>
                    <div className='w-[400px] h-full absolute -right-[40px] bottom-16 hidden md:block'>
                        <img src={Profile} alt="" />
                    </div>
                </div>
            </div>
        </motion.div>
  )
}

export default HomeBanner