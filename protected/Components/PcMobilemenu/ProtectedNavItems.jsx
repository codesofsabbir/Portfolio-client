import { useContext } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../../src/Hooks/UserContext';
import useFetch from '../../../src/Hooks/useFetch';
function ProtectedNavItems() {
    const location = useLocation()
    let page = location.pathname.split("/")[1];
  const {data} = useFetch("https://portfolio-server-yyk2.onrender.com/protectedMenu");
    const {isMenuOpen, setMenuOpen} = useContext(UserContext);
  return (
    <div className='pl-[20px] navitem relative overflow-hidden'>
          <h1 className={`pageTitleShow ${isMenuOpen? "right-[-100px]" : "right-5"}`}><span className='text-black dark:text-[#8c8c8e] capitalize w-fit'>{page === ""?"home": page}</span></h1>
          <nav className={`navItems ${isMenuOpen? "right-28": "-right-20"}`}>
            {
              data.map((dt, index)=>{
                return(
                  <NavLink key={index} to={`/${dt.item}`} onClick={()=>{setMenuOpen(false)}} className={({ isActive }) =>
                    isActive ? 'text-activeLight font-semibold dark:text-activeDark' : 'text-black dark:text-[#8c8c8e]'
                  }><span className=' capitalize'>{dt.item}</span></NavLink>
                )
              })
            }
          </nav>
        </div>
  )
}

export default ProtectedNavItems