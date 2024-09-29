import React from 'react'
import NameTitle from './About Components/NameTitle'
import AddresingSkills from './About Components/AddresingSkills'
import SocialMedia from './About Components/SocialMedia'
function AboutPcView() {
  return (
    <div className={`aboutShowPc`}>
          <NameTitle />
          <AddresingSkills />
          <SocialMedia />
      </div>
  )
}

export default AboutPcView