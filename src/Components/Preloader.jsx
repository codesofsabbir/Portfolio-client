import React, { useState, useEffect } from 'react'

function Preloader() {
    const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 2000); // Match this duration with the animation duration

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={`fixed top-0 left-0 h-screen w-full flex items-center justify-center z-[1000] dark:bg-[#191923] bg-[#EEE3CB] transition-opacity duration-500 ${animationComplete ? 'opacity-0' : 'opacity-100'}`}>
        <div className=' w-1/4 h-2 bg-gray-700 dark:bg-[#8c8c8e] overflow-hidden relative rounded-2xl after:absolute after:content-[""] after:w-0 after:h-2 after:bg-[#c73d3d] dark:after:bg-yellow-500 preloader-bar'></div>
    </div>
  )
}

export default Preloader