import React, {useState} from 'react'
import { HiDotsVertical } from "react-icons/hi";
import NameTitle from './About Components/NameTitle';
import AddresingSkills from './About Components/AddresingSkills';
import SocialMedia from './About Components/SocialMedia';
function AboutMobileView() {
    const [isAboutOpen, setAboutOpen] = useState(false);
return (
    <div className={`aboutShowMobile ${isAboutOpen? "left-0": "-left-[290px]"}`}>
        <div className={`aboutShowIcon ${isAboutOpen?"right-0":"-right-[70px]"}`}>
            <HiDotsVertical className='cursor-pointer text-[22px]' onClick={()=>{setAboutOpen(!isAboutOpen)}}/>
        </div>
        <NameTitle />
        <AddresingSkills />
        <SocialMedia />
    </div>
)
}

export default AboutMobileView