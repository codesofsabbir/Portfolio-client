import { useContext } from 'react'
import { FaLightbulb } from "react-icons/fa";
import { UserContext } from '../../../Hooks/UserContext';
function DarkandLight() {
  const {isDark, setIsDark} = useContext(UserContext);
  return (
    <div className="lightandDark">
          <div className="lightandDarkButton" onClick={()=>setIsDark(!isDark)}>
            <span className='text-[#c73d3d] dark:text-[#FFC107] text-lg'><FaLightbulb /></span>
          </div>
        </div>
  )
}

export default DarkandLight