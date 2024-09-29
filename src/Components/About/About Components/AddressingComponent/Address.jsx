import React from 'react'

function Address() {
    return (
        <div className="border-b-[1px] border-[#656566] pb-5 flex flex-col gap-2">
            <div className="flex justify-between">
                <h3 className='text-[#181818] dark:text-white font-normal dark:font-thin'>Residence:</h3>
                <span className='text-[#181818] dark:text-[#8c8c8e]'>Bangladesh</span>
            </div>
            <div className="flex justify-between">
                <h3 className='text-[#181818] dark:text-white font-normal dark:font-thin'>City:</h3>
                <span className='text-[#181818] dark:text-[#8c8c8e]'>Dhaka</span>
            </div>
            <div className="flex justify-between">
                <h3 className='text-[#181818] dark:text-white font-normal dark:font-thin'>Age:</h3>
                <span className='text-[#181818] dark:text-[#8c8c8e]'>23</span>
            </div>
        </div>
    )
}

export default Address