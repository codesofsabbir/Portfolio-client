import React, { useContext } from 'react';
import Profile from '../../images/me.png';
import { TbZoomScan } from "react-icons/tb";
import ModalImage from '../../ModalImage';
import { UserContext } from '../../../Hooks/UserContext';
function NameTitle() {
    const {modalOpen, setModalOpen} = useContext(UserContext);
    return (
        <div className="dark:bg-dark-mode-gradient bg-light-mode-gradient text-[#8c8c8e] w-full h-[32%] flex flex-col justify-center items-center">
            <div className='profilePic w-24 h-24 rounded-full dark:bg-yellow-500 bg-[#C74D4D] relative overflow-hidden cursor-pointer'>
                <div className="profile-zoom w-16 h-16 absolute top-1/2 left-1/2 bg-[#2b2b2b86] rounded-full text-center leading-[64px] flex items-center justify-center">
                    <TbZoomScan className='text-[32px] text-white' onClick={()=>{setModalOpen(true)}}/>
                </div>
                <img src={Profile} alt="Profile" className='' />
                {
                    modalOpen && <ModalImage />
                }
            </div>
            <h1 className='dark:text-white text-black pt-3 pb-1 text-[15px] font-semibold cursor-pointer hover:text-[#C74D4D] dark:hover:text-yellow-500 transition duration-150 ease-linear'>Sabbir Ahmed</h1>
            <p className='pb-3 text-gray-600 dark:text-[#8c8c8e]'>Front-end Developer</p>
        </div>
    );
}

export default NameTitle;
