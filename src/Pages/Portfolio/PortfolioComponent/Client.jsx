import { useRef } from 'react'
import mehedi from '../../../Components/images/mehedi.jpg'
import imtiaz from '../../../Components/images/Imtiaz.jpg'
import inLtd from '../../../Components/images/in.jpg'
import sahariyar from '../../../Components/images/sahariyar.jpg'
import { GoStarFill } from "react-icons/go";
import { motion } from "framer-motion"
import Slider from "react-slick";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
function Client() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  var settings = {
    dots: false,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          speed: 700,
          autoplay: true,
          autoplaySpeed: 5000,
          cssEase: "linear",
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          speed: 700,
          autoplay: true,
          autoplaySpeed: 5000,
          cssEase: "linear",
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          speed: 700,
          autoplay: true,
          autoplaySpeed: 5000,
          cssEase: "linear",
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };
  const title = {
    hidden: {x:-30, opacity: 0},
    visible: {x:0, opacity: 1,
      transition:{
        duration:.3,
        delay:.9
      }
    }
  }
  return (
    <>
    <motion.h2 variants={title} initial="hidden" animate="visible" className=' text-lg font-semibold text-black dark:text-white mt-10 mb-10'>Client Review</motion.h2>
    <div className="">
        <Slider ref={slider => {
          sliderRef = slider;
        }} {...settings}>
        <div className='relative dark:bg-[#2c2c38] bg-[#96A8A6] p-10 w-1/2'>
        <img src={mehedi} alt="" className='h-[70px] w-[70px] rounded-full absolute right-10 top-0 -translate-y-1/2' />
            <h2 className='text-base dark:text-white text-black'>Md Mehedi Hasan</h2>
            <i className='text-[11px]'>Game Developer</i>
            <p className=' text-justify mt-2'>I had the pleasure of working with Sabbir for customizing my Blogspot theme, and the results exceeded my expectations! He took the time to understand my vision and delivered a sleek, professional design that fit my needs perfectly.</p>
            <div className='dark:bg-[#191923] bg-[#BCD2D0] w-fit rounded-full mt-5 py-2 px-4 flex gap-1'>
            <GoStarFill className='dark:text-[#FFC107] text-[#c73d3d]'/>
            <GoStarFill className='dark:text-[#FFC107] text-[#c73d3d]'/>
            <GoStarFill className='dark:text-[#FFC107] text-[#c73d3d]'/>
            <GoStarFill className='dark:text-[#FFC107] text-[#c73d3d]'/>
            <GoStarFill className='dark:text-[#FFC107] text-[#c73d3d]'/>
            </div>
        </div>
        <div className='w-1/2 relative dark:bg-[#2c2c38] bg-[#96a8a6] p-10'>
        <img src={imtiaz} alt="" className='h-[70px] w-[70px] rounded-full absolute right-10 top-0 -translate-y-1/2' />
            <h2 className='text-base dark:text-white text-black'>Imtiaz Ahmed</h2>
            <i className='text-[11px]'>Marketing Expert</i>
            <p className=' text-justify mt-2'>I recently worked with Sabbir on a WordPress theme customization project, and I’m very impressed with the results. He was able to take my initial ideas and turn them into a functional, polished website that looks fantastic.</p>
            <div className='dark:bg-[#191923] bg-[#BCD2D0] w-fit rounded-full mt-5 py-2 px-4 flex gap-1'>
            <GoStarFill className='dark:text-[#FFC107] text-[#c73d3d]'/>
            <GoStarFill className='dark:text-[#FFC107] text-[#c73d3d]'/>
            <GoStarFill className='dark:text-[#FFC107] text-[#c73d3d]'/>
            <GoStarFill className='dark:text-[#FFC107] text-[#c73d3d]'/>
            <GoStarFill className='dark:text-[#FFC107] text-[#c73d3d]'/>
            </div>
        </div>
        <div className='w-1/2 relative dark:bg-[#2c2c38] bg-[#96a8a6] p-10'>
        <img src={sahariyar} alt="" className='h-[70px] w-[70px] rounded-full absolute right-10 top-0 -translate-y-1/2' />
            <h2 className='text-base dark:text-white text-black'>Sahariyar Hasan</h2>
            <i className='text-[11px]'>Web Designer</i>
            <p className=' text-justify mt-2'>I hired Sabbir to design a landing page with 7 sections, and he absolutely nailed it! Each section was carefully crafted with attention to detail, ensuring the layout was both visually appealing and user-friendly.</p>
            <div className='dark:bg-[#191923] bg-[#BCD2D0] w-fit rounded-full mt-5 py-2 px-4 flex gap-1'>
            <GoStarFill className='dark:text-[#FFC107] text-[#c73d3d]'/>
            <GoStarFill className='dark:text-[#FFC107] text-[#c73d3d]'/>
            <GoStarFill className='dark:text-[#FFC107] text-[#c73d3d]'/>
            <GoStarFill className='dark:text-[#FFC107] text-[#c73d3d]'/>
            <GoStarFill className='dark:text-[#FFC107] text-[#c73d3d]'/>
            </div>
        </div>
        <div className='w-1/2 relative dark:bg-[#2c2c38] bg-[#96a8a6] p-10'>
        <img src={inLtd} alt="" className='h-[70px] w-[70px] rounded-full absolute right-10 top-0 -translate-y-1/2' />
            <h2 className='text-base dark:text-white text-black'>IN Technology Ltd</h2>
            <i className='text-[11px]'>Information Technology Limited</i>
            <p className=' text-justify mt-2'>Sabbir did an outstanding job designing and developing our WordPress multipage website. He quickly understood our requirements and delivered a modern, fully functional site that exceeded our expectations.</p>
            <div className='dark:bg-[#191923] bg-[#BCD2D0] w-fit rounded-full mt-5 py-2 px-4 flex gap-1'>
            <GoStarFill className='dark:text-[#FFC107] text-[#c73d3d]'/>
            <GoStarFill className='dark:text-[#FFC107] text-[#c73d3d]'/>
            <GoStarFill className='dark:text-[#FFC107] text-[#c73d3d]'/>
            <GoStarFill className='dark:text-[#FFC107] text-[#c73d3d]'/>
            <GoStarFill className='dark:text-[#FFC107] text-[#c73d3d]'/>
            </div>
        </div>
        
        </Slider>
        <div className='flex justify-between pt-4'>
          <button className="dark:text-yellow-500 text-[#c73d3d] text-xl font-semibold" onClick={previous}><IoIosArrowBack /></button>
          <button className="dark:text-yellow-500 text-[#c73d3d] text-xl font-semibold" onClick={next}><IoIosArrowForward /></button>
        </div>
    </div>
    </>
  )
}

export default Client