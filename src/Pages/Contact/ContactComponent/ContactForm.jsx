import React, { useRef, useState } from 'react'
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser';

function ContactForm() {
  const [formValues, setFormValues] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [error, setError] = useState('');
  
  const form = useRef();

  const title = {
    hidden: {x:-30, opacity: 0},
    visible: {x:0, opacity: 1,
      transition:{
        duration:.3,
        delay: 1
      }
    }
  }
  const item1 = {
    hidden: {opacity: 0 },
    visible: {opacity: 1,
      transition: {
        duration: .5,
        delay: 1.2,
      }
    }
  };
  const item2 = {
    hidden: { y: -30, opacity: 0 },
    visible: { y: 0, opacity: 1,
      transition: {
        duration: .5,
        delay: 1.5,
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    // Check for empty fields
    if (!formValues.from_name || !formValues.from_email || !formValues.message) {
      setError('All fields are required.');
      return alert(error);
    }
    
    emailjs.sendForm('service_a4qgmdh', 'template_q1jwnik', form.current, {
      publicKey: 'pg_308txLH3dPcOL7',
    })
    .then(
      () => {
        console.log('SUCCESS!');
        form.current.reset(); // Reset the form after success
        setFormValues({ from_name: '', from_email: '', message: '' }); // Reset state
        setError(''); // Clear any previous errors
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
  };
  
  return (
    <>
      <motion.h2 variants={title} initial="hidden" animate="visible" className=' text-lg font-semibold dark:text-white text-black mt-16'>Get In Touch</motion.h2>
      <motion.div variants={item1} initial="hidden" animate="visible" className="map w-full h-96 mt-5 relative">
        <motion.div variants={item2} initial="hidden" animate="visible" className=' w-full md:w-96 h-fit pb-5 dark:bg-[#2c2c38] bg-[#96A8A6] contact-form md:absolute md:-top-14 md:right-10 rounded'>
          <form className='p-5 flex flex-col gap-4' ref={form} onSubmit={sendEmail}>
            <div className='flex w-full'>
              <div className="flex w-16 h-12 justify-center items-center dark:bg-[#20202a] bg-[#BCD2D0] text-lg">
                <IoPersonSharp />
              </div>
              <input
                type="text"
                name="from_name"
                value={formValues.from_name}
                onChange={handleInputChange}
                placeholder='Name'
                className='w-full px-3 font-medium text-lg outline-none'
              />
            </div>
            <div className='flex w-full'>
              <div className="flex w-16 h-12 justify-center items-center dark:bg-[#20202a] bg-[#BCD2D0] text-lg">
                <MdOutlineAlternateEmail />
              </div>
              <input
                type="email"
                name="from_email"
                value={formValues.from_email}
                onChange={handleInputChange}
                placeholder='Email'
                className='w-full px-3 font-medium text-lg outline-none'
              />
            </div>
            <div className='flex w-full'>
              <div className="flex w-16 h-28 justify-center pt-[10px] dark:bg-[#20202a] bg-[#BCD2D0] text-lg">
                <FaEnvelope />
              </div>
              <textarea
                name="message"
                value={formValues.message}
                onChange={handleInputChange}
                placeholder='Message'
                className='w-full h-28 px-3 pt-2 pb-3 font-medium text-lg outline-none resize-none overflow-x-auto message'
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>} {/* Error message */}
            <button className='py-3 px-5 dark:bg-[#FFC107] bg-[#c73d3d] dark:text-[#20202a] text-white text-[11px] font-semibold'>SEND</button>
          </form>
          <div className="w-full flex justify-evenly items-center">
            <a href="https://www.facebook.com/sabbirahammad.mridul" target="_blank" rel="noopener noreferrer"><div className="icon2"><FaFacebookF /></div></a>
            <a href="https://www.linkedin.com/in/imsabbir/" target="_blank" rel="noopener noreferrer"><div className="icon2"><FaLinkedinIn /></div></a>
            <a href="https://x.com/i_m_sabbir_" target="_blank" rel="noopener noreferrer"><div className="icon2"><FaTwitter /></div></a>
            <a href="https://www.instagram.com/im.sabbir_/" target="_blank" rel="noopener noreferrer"><div className="icon2"><FaInstagram /></div></a>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default ContactForm;
