import React from 'react'
import "./About.css"

import AboutMobileView from './AboutMobileView';
import AboutPcView from './AboutPcView';
import { Outlet } from 'react-router-dom';
function About() {
  return (
    <>
      <div>
        <AboutMobileView />
        <AboutPcView />
      </div>
      <Outlet/>
    </>
  )
}

export default About