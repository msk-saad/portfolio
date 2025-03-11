import '../src/styles/app.css'
import ChatLink from './Components/NavBarComps/ChatLink'
import Nav from './Components/NavBarComps/Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Pages/Home'
import Work from './Components/Pages/Work'
import Projects from './Components/Pages/Projects'
import Posts from './Components/Pages/Posts'
import { useEffect, useState } from 'react'

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log('Menu Toggled', !isMenuOpen)
    setIsMenuOpen((prevState) => !prevState);
  }

  useEffect(() => {
    if(isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isMenuOpen]);

  return (
    <>
    <Router>
    {/* Body-Container starts here */}
    <div className="body-container">

    {/* Nav-bar section starts */}
      <div className="navBar-container">

      <div className="hamburger-menu" onClick={toggleMenu}>
        {isMenuOpen ? (
            <span className="hamburger-icon close-icon">&#10005;</span> // 'X' icon when menu is open
          ) : (
            <span className="hamburger-icon">&#9776;</span> // Hamburger icon when menu is closed
          )}
        </div>

        <Nav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        
        <div className="chat">
          <ChatLink />
        </div>
      </div>
      {/* Nav-bar section ends */}
  
      </div>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/work' element={<Work />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/posts' element={<Posts />} />
      </Routes>

      </Router>
      {/* Body-container ends here */}
    </>
  )
}

export default App
