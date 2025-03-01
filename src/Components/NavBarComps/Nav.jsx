import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 
import HomeLink from './HomeLink'
import WorkLink from './WorkLink'
import ProjectsLink from './ProjectsLink'
import PostsLink from './PostsLink'
import Home from '../IntroComps/Home'
import Work from '../WorkComponent/Work'
import Projects from '../ProjectsComps/Projects'
import Posts from '../PostsComps/Posts'
import './nav.css'


const Nav = () => {
  return (

    <Router>
      <div>
        {/* Navigation */}
        <nav>
          <HomeLink />
          <WorkLink />
          <ProjectsLink />
          <PostsLink />
        </nav>
      </div>

      {/* Routes */}
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/work' element = {<Work />}/>
        <Route path='/projects' element = {<Projects />}/>
        <Route path='/posts' element = {<Posts />}/>
      </Routes>

    </Router>

    // <>
    //   <HomeLink />
    //   <WorkLink />
    //   <ProjectsLink />
    //   <PostsLink />
    // </>
  )
}

export default Nav