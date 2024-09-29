import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
function SocialMedia() {
    return (
        <div className="dark:bg-dark-mode-gradient bg-[#879795] w-full h-[6%] flex justify-evenly items-center gap-2">
            <a href="https://www.facebook.com/sabbirahammad.mridul" target="_blank" rel="noopener noreferrer"><div className="icon"><FaFacebookF /></div></a>
            <a href="https://www.linkedin.com/in/imsabbir/" target="_blank" rel="noopener noreferrer"><div className="icon"><FaLinkedinIn /></div></a>
            <a href="https://www.youtube.com/@TechTorialss" target="_blank" rel="noopener noreferrer"><div className="icon"><FaYoutube /></div></a>
            <a href="https://www.instagram.com/im.sabbir_/" target="_blank" rel="noopener noreferrer"><div className="icon"><FaInstagram /></div></a>
        </div>
    )
}

export default SocialMedia