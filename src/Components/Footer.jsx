import React from 'react'

function Footer() {
  return (
    <div className="w-ful h-[50px] flex flex-col md:flex-row justify-between items-center mt-10 dark:bg-[#2c2c38] bg-[#96A8A6] px-5 py-2">
            <p className='dark:text-[#8c8c8e] text-[#181818]'>&copy; 2024 Artur Carter. All rights reserved.</p>
            <p className='dark:text-[#8c8c8e] text-[#181818]'>Template authar: <span className='text-[#c73d3d] font-semibold dark:text-yellow-500'>Sabbir Ahmed</span></p>
        </div>
  )
}

export default Footer