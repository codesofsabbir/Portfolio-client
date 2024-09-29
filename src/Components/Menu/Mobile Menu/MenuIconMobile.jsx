import React, {useContext} from 'react'
import { Divide as Hamburger } from 'hamburger-react'
import { UserContext } from '../../../Hooks/UserContext'
function MenuIconMobile() {
    const {isMenuOpen, setMenuOpen} = useContext(UserContext);
    return (
        <div className={`w-[82px] h-[70px] flex items-center justify-center absolute ${isMenuOpen? "left-0": "-left-[82px]"} transition-all duration-500 ease-in-out`}>
        <Hamburger toggled={isMenuOpen} toggle={setMenuOpen} size={20} duration={0.3} distance="sm" />
        </div>
    )
}

export default MenuIconMobile
