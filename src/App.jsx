import './app.css'
import profile from './assets/profile.jpeg'
import ChatLink from './Components/NavBarComps/ChatLink'
import Nav from './Components/NavBarComps/Nav'


function App() {

  return (
    <>
    {/* Body-Container starts here */}
    <div className="body-container">

    {/* Nav-bar section starts */}
      <div className="navBar-container">
        <div className="nav">
          <Nav />
        </div>
        
        <div className="chat">
          <ChatLink />
        </div>
      </div>
      {/* Nav-bar section ends */}

      {/* Intro-section starts */}
      <div className="intro-section">
        <img className='profile-pic' src={profile} alt="Memoji-Mac" />
      </div>
  
      </div> 
      {/* Body-container ends here */}
    </>
  )
}

export default App
