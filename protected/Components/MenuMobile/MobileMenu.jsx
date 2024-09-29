import { useContext } from 'react'
import MenuIconMobile from './MenuIconMobile'
import ProtectedNavItems from '../PcMobilemenu/ProtectedNavItems'
import ProtectedDarkandLight from '../PcMobilemenu/ProtectedDarkandLight'
import { UserContext } from '../../../src/Hooks/UserContext';

function MobileMenu() {
  const {isMenuOpen} = useContext(UserContext);
  return (
    <div className={`menuBar absolute ${isMenuOpen? "left-0": "-left-[200px]"} w-[200px] z-40 transition-all duration-500 ease-in-out lg:hidden`}>
      <div className="pl-[18px] text-[#8c8c8e] w-full h-[70px] flex items-center bg-[#252530]">
        <MenuIconMobile />
      </div>
        <ProtectedNavItems />
        <ProtectedDarkandLight />
    </div>
  )
}

export default MobileMenu