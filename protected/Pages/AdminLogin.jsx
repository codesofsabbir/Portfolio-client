import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../src/Hooks/UserContext";
function AdminLogin() {
  const {setLogin} = useContext(UserContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username : "",
    password : ""
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch("https://portfolio-server-yyk2.onrender.com/user")
    .then((res)=>res.json())
    .then((data)=>{
      const user = data.find(
        (user) =>
          user.username === formData.username && user.password === formData.password
      );

      if (user) {
        setLogin(true);
        navigate("/admin")
      } else {
        alert("Your Name or Password is Incorrect!")
      }
    })
  };

  return (
    <div className='flex items-center justify-center w-full'>
      <div className='w-fit h-fit px-5 py-8 rounded-sm bg-gray-700'>
        <h2 className='text-2xl mb-10 text-center'>Login Form</h2>
        <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="username"  // Correct name attribute
            placeholder='User Name' 
            className='px-3 py-2 rounded-sm outline-none' 
            onChange={handleChange} 
            value={formData.username}
          />
          <input 
            type="password" 
            name="password"  // Correct name attribute
            placeholder='Password' 
            className='px-3 py-2 rounded-sm outline-none' 
            onChange={handleChange} 
            value={formData.password}
          />
          <input 
            type="submit" 
            value="Login" 
            className='bg-[#C74D4D] dark:bg-[#FFC107] text-black px-3 py-2 cursor-pointer rounded-sm'
          />
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
