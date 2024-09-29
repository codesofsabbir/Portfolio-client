
import { useState, useEffect, useMemo, useContext } from 'react'
import useFetch from '../../../Hooks/useFetch'
import { motion } from "framer-motion"
import { UserContext } from '../../../Hooks/UserContext';

function Projects() {
  const item1 = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1,
      transition: {
        duration: .5,
        delay: .7,
      }
    }
  };
  const truncateDescription = (description, wordLimit) => {
    const words = description.split(' ');
    if (words.length <= wordLimit) return description;
    return words.slice(0, wordLimit).join(' ') + '...';
  };
  const [projectrow, setProjectrow] = useState(2);
  const [currentProjects, setCurrentProjects] = useState([]);

  const {data} = useFetch("https://portfolio-server-yyk2.onrender.com/portfolio")
  const {filter, setPortfolioId, setDetailsOpen} = useContext(UserContext);
  

  const filteredPortfolio = useMemo(() => {
    
    if (filter === "all") return data;
    return data.filter((portfolio) => (portfolio.category.toLowerCase()) === filter);
  }, [data, filter]);

  useEffect(()=>{
    const projectshow = 3;
    const lastProjectIndex = projectrow * projectshow;
    const firstProjectIndex = 0;
    setCurrentProjects(filteredPortfolio.slice(firstProjectIndex, lastProjectIndex));
  }, [projectrow, filteredPortfolio]);

  return (
    <>
    <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        {
            currentProjects.map((dt)=>{
                return(
                    <motion.div key={dt.id} variants={item1} initial="hidden" animate="visible" className='w-full h-[250px] overflow-hidden relative shadow-xl portfolioItem'>
                        <img src={dt.images.thumbnail} alt="" className='cursor-pointer h-full w-full' />
                        <div className="w-full dark:bg-[#2c2c38] bg-[#96A8A6] p-5 flex flex-col gap-1 absolute -bottom-full left-0 portfolioDetailsShow">
                            <h2 className='text-base dark:text-white text-black'>{dt.title}</h2>
                            <p className=' text-justify'>{truncateDescription(dt.description, 25)}</p>
                            <div className='flex gap-10'>
                            <p className="dark:text-yellow-500 text-[#c73d3d] cursor-pointer font-semibold flex items-center pt-3"><a href={dt.projectLink} target='_blank'>Live Preview</a></p>
                            <p className="dark:text-yellow-500 text-[#c73d3d] cursor-pointer font-semibold flex items-center pt-3" onClick={()=>{
                              setPortfolioId(dt.id);
                              setDetailsOpen(true)
                            }}>Details</p>
                            </div>
                        </div>
                    </motion.div>
                    
                )
            })
        }   
    </div>
    <div className='w-full flex justify-center pt-10'>
    {(projectrow * 3) < filteredPortfolio.length && (
          <button
            className='py-2 px-5 dark:bg-[#FFC107] bg-[#C74D4D] dark:text-[#20202a] text-white text-[11px] font-semibold'
            onClick={() => setProjectrow(projectrow + 1)}
          >
            MORE
          </button>
        )}
    </div>
    </>
  )
}

export default Projects
