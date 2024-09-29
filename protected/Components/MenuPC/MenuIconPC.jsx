import { useContext } from 'react'
import { Divide as Hamburger } from 'hamburger-react'
import { UserContext } from '../../../src/Hooks/UserContext'
function MenuIconPC() {
  const {isMenuOpen, setMenuOpen} = useContext(UserContext);
  return (
    <div className="pl-[18px] text-[#8c8c8e] w-full h-[70px] flex items-center bg-[#BCD2D0] dark:bg-[#252530]">
      <Hamburger toggled={isMenuOpen} toggle={setMenuOpen} size={20} duration={0.3} distance="sm" onClick={()=>{setMenuOpen(!isMenuOpen)}} />
    </div>
  )
}

export default MenuIconPC