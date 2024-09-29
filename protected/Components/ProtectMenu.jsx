import PcMenu from './MenuPC/PcMenu'
import MobileMenu from './MenuMobile/MobileMenu'
import { Outlet } from 'react-router-dom'

function ProtectMenu() {
  return (
    <>
      <Outlet />
      <div>
        <PcMenu />
        <MobileMenu />
      </div>
    </>
  )
}

export default ProtectMenu
      
    


