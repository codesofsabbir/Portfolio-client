import { useEffect } from 'react'
import "./Home.css"
import {Helmet} from "react-helmet";
import HomeBanner from './HomeComponent/HomeBanner';
import Accomplishments from '../../Components/Accomplishments';
import Services from './HomeComponent/Services';
import Footer from '../../Components/Footer';
function Home() {
    useEffect(()=>{
        fetch("https://portfolio-server-yyk2.onrender.com/homeBanner")
        .then(res=>res.json())
        .then((data)=>{
            console.log(data);
        })
    })
  return (
    <div className='w-full mt-[70px] lg:mt-8 mx-2 md:mx-8 overflow-x-auto scrollBarHide'>
        <Helmet>
            <title>Home</title>
        </Helmet>
        <HomeBanner />
        <Accomplishments />
        <Services />
        <Footer />
    </div>
  )
}

export default Home