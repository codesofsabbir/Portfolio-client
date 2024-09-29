import { useContext, useRef } from 'react'
import { UserContext } from '../../../Hooks/UserContext'
import useFetch from '../../../Hooks/useFetch';
import { FaXmark } from "react-icons/fa6";
import Slider from "react-slick";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
function PortfolioDetails() {

    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    var settings = {
        dots: false,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    const {portfolioId, setDetailsOpen} = useContext(UserContext);
    const {data} = useFetch("https://portfolio-server-yyk2.onrender.com/portfolio");
    const selectItem = data.find((dt)=>portfolioId === dt.id)

return (
    <div className='w-5/6 lg:w-2/3 h-[90%] bg-[#96a8a6;] dark:bg-[#292933] fixed top-9 border border-black dark:border-white shadow-sm shadow-black dark:shadow-white rounded-md overflow-hidden pb-7 z-50'>
        <div className="relative">

            <div className=' absolute top-2 right-5 cursor-pointer' onClick={()=>setDetailsOpen(false)}>
                <FaXmark  className='text-2xl'/>
            </div>

            <div className='w-[90%] mx-auto projectDetailsScrollbar py-5'>
                {/* Portfolio Details Image Slider Section */}
                <div className="slider h-[400px] overflow-hidden">
                    <Slider ref={slider => {
                        sliderRef = slider;
                    }} {...settings}>
                        <img src={selectItem?.images?.thumbnail} alt=""  className='h-3/4 w-full'/>
                        {
                            selectItem?.images?.sliderImages && selectItem.images.sliderImages.length > 0 ? (
                                selectItem.images.sliderImages.map((img, index) => (
                                    <img key={index} src={img} alt="" className="h-3/4 w-full" />
                                ))
                            ) : null
                        }
                    </Slider>
                    
                </div>
                {/* slider next prev button  */}
                <div className='flex justify-between pt-4'>
                        <button className="dark:text-yellow-500 text-[#c73d3d] text-xl font-semibold" onClick={previous}><IoIosArrowBack /></button>
                        <button className="dark:text-yellow-500 text-[#c73d3d] text-xl font-semibold" onClick={next}><IoIosArrowForward /></button>
                    </div>

                {/* Portfolio Details Description Section */}
                <h2 className='p-5 text-xl'>{selectItem?.title}</h2>
                <div className="technology p-5">
                    <h3 className='text-[#c73d3d] dark:text-yellow-500'>Uses Technologies :</h3>
                    <div className="flex gap-5 pt-2">
                    {
                        selectItem?.tags && selectItem.tags.length > 0 ? (
                            selectItem.tags.map((tag, index) => (
                                <h4 key={index} className='text-base font-bold dark:text-gray-400 text-md'>{tag}</h4>
                            ))
                        ) : ""
                    }
                    </div>
                </div>
                <div className='p-5'>
                    <p className='text-white text-justify'>{selectItem?.description}</p>
                </div>
                {/* Live View Button  */}
                <p className="dark:text-yellow-500 p-5 text-[#c73d3d] cursor-pointer font-semibold"><a href={selectItem?.projectLink} target='_blank'>Live Preview</a></p>
            </div>

        </div>
    </div>
)
}

export default PortfolioDetails