/* This code snippet is a React component named `App` that serves as the main entry point of a React
application. Here's a breakdown of what the code is doing: */
import { useState, useEffect } from 'react'
import './App.css'
import MenuBar from './Components/Menu/MenuBar'
import About from './Components/About/About'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Pages/Home/Home'
import History from './Pages/History/History'
import Portfolio from './Pages/Portfolio/Portfolio'
// import Blogs from './Pages/Blogs/Blogs'
import Contact from './Pages/Contact/Contact'
import { UserContext } from './Hooks/UserContext'
import Preloader from './Components/Preloader'
import Error from './Pages/Error'
import Protected from '../protected/Components/Protected'
import PostList from '../protected/Pages/PostList'
import NewPost from '../protected/Pages/NewPost'
import ProjectList from '../protected/Pages/ProjectList'
import NewProject from '../protected/Pages/NewProject'
import AdminLogin from '../protected/Pages/AdminLogin'
import ProtectMenu from '../protected/Components/ProtectMenu'
import Admin from '../protected/Components/Admin'
import Dashboard from '../protected/Pages/Dashboard'
function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isAboutOpen, setAboutOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const [blogPage, setBlogPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [login, setLogin] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [portfolioId, setPortfolioId] = useState("");
  useEffect(() => {
    const body = document.querySelector('body');
    if (isDark) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [isDark]);



  return (
    <UserContext.Provider value={{ isMenuOpen, setMenuOpen, isAboutOpen, setAboutOpen, isDark, setIsDark, blogPage, setBlogPage, limit, setLimit, modalOpen, setModalOpen, filter, setFilter, login, setLogin, detailsOpen, setDetailsOpen, portfolioId, setPortfolioId }}>
      <div className='main'>
        <div className="content-container">
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Navigate to='/home'/>} />
              <Route path='' element={<About/>}>

                <Route path='' element={<MenuBar />}>
                  <Route path='/home' element={<Home />} />
                  <Route path='/history' element={<History />} />
                  <Route path='/portfolio' element={<Portfolio />} />
                  {/* <Route path='/blogs' element={<Blogs />} /> */}
                  <Route path='/contact' element={<Contact />} />
                  <Route path="*" element={<Error />} />
                </Route>
              </Route>

              <Route path='/login' element={<AdminLogin/>} />

              <Route path='' element={<Protected />}>
                <Route path='' element={<ProtectMenu />}>
                  <Route path='/admin' element={<Admin/>} />
                  <Route path='/post' element={<PostList/>} />
                  <Route path='/new-post' element={<NewPost/>} />
                  <Route path='/project' element={<ProjectList/>} />
                  <Route path='/new-project' element={<NewProject/>} />
                  <Route path='/dashboard' element={<Dashboard/>} />
                  <Route path="*" element={<Error />} />
                </Route>
              </Route>


              
            </Routes>
          </BrowserRouter>
        </div>
      </div>
      {isLoading && <Preloader />}
    </UserContext.Provider>
  )
}

export default App
