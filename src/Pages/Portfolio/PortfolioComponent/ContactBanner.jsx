import useFetch from '../../../Hooks/useFetch'
import { useNavigate } from 'react-router-dom'
function ContactBanner() {
    const navigate = useNavigate()
    const {data} = useFetch("https://portfolio-server-yyk2.onrender.com/banner")
return (
    <div className="bg w-full h-[270px] mt-6">
        <div className="details">
            <div className='w-[85%] mx-auto flex justify-center items-center h-full relative overflow-hidden text-center md:text-start'>
                <div className='w-full text-center'>
                    {
                        data.map((dt, index)=>{
                            return(
                                <div key={index}>
                                    <h1 className='text-[#fafafc] text-[27px] md:text-[32px] font-extrabold leading-10 mb-4'>{dt?.title}</h1>
                                    <p className='text-white text-md md:text-lg code mb-6'>{dt?.description}</p>
                                </div>
                            )
                        })
                    }
                    <button className='py-3 px-5 dark:bg-[#FFC107] bg-[#C74D4D] dark:text-[#20202a] text-white text-[11px] font-semibold' onClick={()=>navigate("/contact")} >CONTACT ME</button>
                </div>
            </div>
        </div>
    </div>
)
}

export default ContactBanner