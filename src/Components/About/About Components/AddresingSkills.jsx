import React from 'react'
import 'react-circular-progressbar/dist/styles.css';
import Address from './AddressingComponent/Address';
import Language from './AddressingComponent/Language';
import SkillBars from './AddressingComponent/SkillBars';
import OtherSkills from './AddressingComponent/OtherSkills';
import DownloadButton from './AddressingComponent/DownloadButton';

function AddresingSkills() {
    return (
        <div id='scrollBar' className='scrollBarHide px-6 pt-5 h-[62%] overflow-auto'>
            <Address />
            <Language />
            <SkillBars />
            <OtherSkills />
            <DownloadButton />
        </div>
    )
}

export default AddresingSkills
