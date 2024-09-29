import { useContext } from 'react'
import {Helmet} from "react-helmet";
import "./Portfolio.css"
import NavTab from './PortfolioComponent/NavTab';
import Projects from './PortfolioComponent/Projects';
import Client from './PortfolioComponent/Client';
import Accomplishments from '../../Components/Accomplishments';
import Footer from '../../Components/Footer';
import ContactBanner from './PortfolioComponent/ContactBanner';
import { motion } from "framer-motion"
import PortfolioDetails from './PortfolioComponent/PortfolioDetails';
import { UserContext } from '../../Hooks/UserContext';
function Portfolio() {
  const title = {
    hidden: {x:-30, opacity: 0},
    visible: {x:0, opacity: 1,
      transition:{
        duration:.3,
        delay:.5
      }
    }
  }
  const {detailsOpen} = useContext(UserContext)
  return (
    <div className='w-full mt-[70px] lg:mt-8 mx-2 md:mx-8 overflow-x-auto   scrollBarHide'>
      <Helmet>
          <title>Portfolio </title>
      </Helmet>
      <div>
        <motion.h2 variants={title} initial="hidden" animate="visible" className=' text-lg font-semibold dark:text-white text-black'>Portfolio</motion.h2>
        <NavTab />
        <Projects />
        <Client />
        <Accomplishments />
        <ContactBanner />
        {
           detailsOpen && <PortfolioDetails />
        }
      </div>
      <Footer />
    </div>
  )
}

export default Portfolio