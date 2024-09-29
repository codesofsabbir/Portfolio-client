import React, { useContext } from 'react'
import NavItems from '../MenuComponent/NavItems';
import { UserContext } from '../../../Hooks/UserContext';
import MenuIconMobile from './MenuIconMobile';
import DarkandLight from '../MenuComponent/DarkandLight';
function MenuBarMobile() {
  const {isMenuOpen} = useContext(UserContext);
  return (
    <div className={`menuBar absolute ${isMenuOpen? "right-0": "-right-[200px]"} w-[200px] z-40 transition-all duration-500 ease-in-out lg:hidden`}>
        <div className="pl-[18px] text-[#8c8c8e] w-full h-[70px] flex items-center bg-[#252530]">
          <MenuIconMobile />
        </div>
        <NavItems/>
        <DarkandLight />
    </div>
  )
}

export default MenuBarMobile