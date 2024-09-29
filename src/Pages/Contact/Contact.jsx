import {Helmet} from "react-helmet";
import './Contact.css'
import Footer from '../../Components/Footer';
import ContactForm from './ContactComponent/ContactForm';
import Personalinfo from './ContactComponent/Personalinfo';
function Contact() {
  return (
    <div className='w-full mt-[70px] lg:mt-8 mx-2 md:mx-8 overflow-x-auto   scrollBarHide'>
            <Helmet>
                <title>Contact </title>
            </Helmet>
          <Personalinfo/>
          <ContactForm />
          
          <Footer />
        
    </div>
  )
}

export default Contact