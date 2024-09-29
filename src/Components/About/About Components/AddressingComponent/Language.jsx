import React, {useContext, useEffect} from 'react'
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import {UserContext} from '../../../../Hooks/UserContext'
function Language() {
    const {isDark} = useContext(UserContext);
    const BanglaPercentage = 100;
    const EnglishPercentage = 50;
    const GermanPercentage = 20;

    const progressBarStyles = buildStyles({
        textSize: '17px',
        pathTransitionDuration: 0.5,
        pathColor: '#C74D4D',
        textColor: 'black',
        trailColor: 'rgb(24, 24, 34)',
    });
    const darkprogressBarStyles = buildStyles({
        textSize: '17px',
        pathTransitionDuration: 0.5,
        pathColor: 'rgb(234, 179, 8)',
        textColor: '#8c8c8e',
        trailColor: 'rgb(24, 24, 34)',
    });
    const styles = isDark ? darkprogressBarStyles : progressBarStyles;
    
    return (
        <div className="border-b-[1px] border-[#656566] py-5 flex gap-2 justify-around">
            <div className='text-center ' style={{ width: 70}}>
                <CircularProgressbar value={BanglaPercentage} text={`${BanglaPercentage}%`} styles={styles} />
                <h3 className='dark:text-white text-black'>Bangla</h3>
            </div>
            <div className='text-center' style={{ width: 70}}>
                <CircularProgressbar value={EnglishPercentage} text={`${EnglishPercentage}%`} styles={styles} />
                <h3 className='dark:text-white text-black'>English</h3>
            </div>
            <div className='text-center' style={{ width: 70}}>
                <CircularProgressbar value={GermanPercentage} text={`${GermanPercentage}%`} styles={styles} />
                <h3 className='dark:text-white text-black'>German</h3>
            </div>
        </div>
    )
}

export default Language