import React from 'react'
import MenuBarPc from './PC Menu/MenuBarPc';
import MenuBarMobile from './Mobile Menu/MenuBarMobile';
import "./menubar.css"
import { Outlet } from 'react-router-dom';
function MenuBar() {
  return (
    <>
      <Outlet />
    <div>
      {/* If the device view in pc then show this  */}
      <MenuBarPc />

      {/* If the device view in mobile then show this  */}
      <MenuBarMobile />

    </div>
    </>
  )
}

export default MenuBar
