import React from 'react'
import profile from '../../assets/profile.jpeg'
import '../../styles/home.css'
const Home = () => {
  return (
    <>
      <div className="home-container">

        <div className="intro-section">
          <img className='profile-pic' src={profile} alt="Memoji-Mac" />

          <div className="intro-texts">
            <h1 className="name">Mohammed Saad</h1>
            <h3 className="title">Software Engineer based in <span>India</span></h3>
          </div>

          <div className="about">
            
          </div>
        </div>

      </div>
    </>
  )
}

export default Home