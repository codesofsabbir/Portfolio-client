import { useContext } from 'react'
import NavItems from '../MenuComponent/NavItems';
import MenuIcon from "./MenuIcon"
import { UserContext } from '../../../Hooks/UserContext';
import DarkandLight from '../MenuComponent/DarkandLight';
function MenuBarPc() {
  const {isMenuOpen} = useContext(UserContext);
  return (
    <div className={`menuBar ${isMenuOpen? "w-[200px]" : "w-[82px]"} hidden lg:flex`}>
        <MenuIcon />
        <NavItems />
        <DarkandLight />
    </div>
  )
}

export default MenuBarPc