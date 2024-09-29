import React from 'react'

function SkillBars() {
    return (
        <div className="border-b-[1px] border-[#656566] py-5 flex gap-4 flex-col">
            <div>
                <div className='flex justify-between '>
                    <h3 className='text-black dark:text-white'>HTML</h3> <h3 className='text-black dark:text-white'>95%</h3>
                </div>
                <div className="w-full h-[5px] bg-[#181818] rounded-full overflow-hidden">
                    <div className="w-[95%] h-full dark:bg-yellow-500 bg-[#C74D4D]"></div>
                </div>
            </div>
            <div>
                <div className='flex justify-between'>
                    <h3 className='text-black dark:text-white'>CSS</h3> <h3 className='text-black dark:text-white'>90%</h3>
                </div>
                <div className="w-full h-[5px] bg-[#181818] rounded-full overflow-hidden">
                    <div className="w-[90%] h-full dark:bg-yellow-500 bg-[#C74D4D]"></div>
                </div>
            </div>
            <div>
                <div className='flex justify-between'>
                    <h3 className='text-black dark:text-white'>JAVASCRIPT</h3> <h3 className="text-black dark:text-white">75%</h3>
                </div>
                <div className="w-full h-[5px] bg-[#181818] rounded-full overflow-hidden">
                    <div className="w-[75%] h-full dark:bg-yellow-500 bg-[#C74D4D]"></div>
                </div>
            </div>
            <div>
                <div className='flex justify-between'>
                    <h3 className="text-black dark:text-white">REACT</h3> <h3 className="text-black dark:text-white">85%</h3>
                </div>
                <div className="w-full h-[5px] bg-[#181818] rounded-full overflow-hidden">
                    <div className="w-[85%] h-full dark:bg-yellow-500 bg-[#C74D4D]"></div>
                </div>
            </div>
            <div>
                <div className='flex justify-between'>
                    <h3 className="text-black dark:text-white">NEXT</h3> <h3 className="text-black dark:text-white">80%</h3>
                </div>
                <div className="w-full h-[5px] bg-[#181818] rounded-full overflow-hidden">
                    <div className="w-[80%] h-full dark:bg-yellow-500 bg-[#C74D4D]"></div>
                </div>
            </div>
            <div>
                <div className='flex justify-between'>
                    <h3 className="text-black dark:text-white">WordPress</h3> <h3 className="text-black dark:text-white">75%</h3>
                </div>
                <div className="w-full h-[5px] bg-[#181818] rounded-full overflow-hidden">
                    <div className="w-[75%] h-full dark:bg-yellow-500 bg-[#C74D4D]"></div>
                </div>
            </div>
            <div>
                <div className='flex justify-between'>
                    <h3 className="text-black dark:text-white">Blogger</h3> <h3 className="text-black dark:text-white">80%</h3>
                </div>
                <div className="w-full h-[5px] bg-[#181818] rounded-full overflow-hidden">
                    <div className="w-[80%] h-full dark:bg-yellow-500 bg-[#C74D4D]"></div>
                </div>
            </div>
        </div>
    )
}

export default SkillBars