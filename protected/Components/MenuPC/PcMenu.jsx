import { useContext } from 'react'
import MenuIconPC from './MenuIconPC'
import ProtectedNavItems from '../PcMobilemenu/ProtectedNavItems'
import ProtectedDarkandLight from '../PcMobilemenu/ProtectedDarkandLight'
import { UserContext } from '../../../src/Hooks/UserContext'

function PcMenu() {
  const {isMenuOpen} = useContext(UserContext);
  return (
    <div className={`menuBar ${isMenuOpen? "w-[200px]" : "w-[82px]"} hidden lg:flex absolute left-0`}>
        <MenuIconPC />
        <ProtectedNavItems />
        <ProtectedDarkandLight />
    </div>
  )
}

export default PcMenu