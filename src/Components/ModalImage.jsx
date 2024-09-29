import React, { useContext } from 'react'
import profileModal from '../Components/images/zooming.jpg'
import { ImCross } from "react-icons/im";
import { UserContext } from '../Hooks/UserContext';
function ModalImage() {
    const {setModalOpen} = useContext(UserContext);
    const handleModal = (event)=>{
      event.stopPropagation()
      setModalOpen(false)
    }
  return (
    <div className='fixed top-0 left-0 w-full h-screen bg-[#000000e7] z-20 flex flex-col items-center'>
      <div className="relative h-screen w-full">
        <div className='h-full w-full absolute left-1/2 top1/2 -translate-x-1/2 z-10 flex flex-col justify-center items-center'>
          <div className='w-full relative'>
              <button className='text-2xl absolute right-10 -top-5'><ImCross onClick={handleModal}/></button>
          </div>
          <img src={profileModal} alt=""  className='w-2/5'/>
        </div>
        </div>
    </div>
  )
}

export default ModalImage