import { useState, useEffect } from 'react';
import { FaTrash } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import useFetch from '../../src/Hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import '../style.css'
function ProjectList() {
  const { data, loading, error, setData} = useFetch("https://portfolio-server-yyk2.onrender.com/portfolio");
  useEffect(() => {
    return () => {
      fetch("https://portfolio-server-yyk2.onrender.com/portfolio")
      .then((res)=>res.json())
      .then((data)=> setData(data))
    }
  }, [data])
  
  const navigate = useNavigate();
  const [deleteError, setDeleteError] = useState(null);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        await fetch(`https://portfolio-server-yyk2.onrender.com/portfolio/${id}`, {
          method: 'DELETE',
        });
        
      } catch (err) {
        setDeleteError("Failed to delete project. Please try again.");
      }
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading projects: {error.message}</p>;

  return (
    <div className='w-[90%] absolute right-0'>
      <div className="w-[95%]">
        <div className="w-full border-b-4 dark:border-white border-gray-700 mt-5 py-5 flex justify-end">
          <button className='border dark:border-[#FFC107] border-[#C74D4D]  px-5 py-2 rounded-md cursor-pointer' onClick={() => navigate("/new-project")}>New Project</button>
        </div>
        <div className="w-full mt-5 pb-5 hideScroll">
          {deleteError && <p className="text-red-500">{deleteError}</p>}
          {
            data.map((dt, index) => (
              <div key={index} className="flex justify-between w-full dark:bg-slate-800 bg-[#96A8A6] h-fit py-3 rounded-md px-5 my-2">
                <div><h3 className='text-black dark:text-white'>{dt.title}</h3></div>
                <div className="actionButtons text-black flex text-lg gap-4">
                  <FaRegEdit className='text-green-800' />
                  <FaTrash className='text-[#C74D4D] cursor-pointer' onClick={() => handleDelete(dt.id)} />
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
