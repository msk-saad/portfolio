import React, { useState } from 'react'
import profile from '../../assets/profile.jpeg'
import '../../styles/home.css'

const Home = () => {

  const [specialTextVisible, setSpecialTextVisible] = useState({
    text1: false,
    text2: false,
    text3: false,
  });

  const displaySpecialText = (textKey) => {
    setSpecialTextVisible((prevState) => ({
      ...prevState,
      [textKey]: !prevState[textKey], // Toggle visibility
    }));
  };

  return (
    <>
      <div className="home-container">

        <div className="intro-section">
          <img className='profile-pic' src={profile} alt="Memoji-Mac" />

          <div className="intro-texts">
            <h1 className="name">Mohammed Saad</h1>
            <h3 className="title">Software Engineer based in <span>India</span></h3>
          </div>

        </div>

        <div className="about">
            <p>
            I am a passionate software engineer based in India, with a deep commitment to building elegant and functional solutions that make a meaningful impact.<button onClick={() => {displaySpecialText('text1')}} type="button" class="cursor-pointer rounded-md bg-zinc-700 px-1 py-[0.5] text-sm font-normal text-zinc-400 transition-colors hover:bg-zinc-500 hover:text-zinc-50 hover:opacity-100 relative -top-[2px] ml-1.5 opacity-80"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-left-right relative -top-[1.35px] inline-block"><path d="m9 7-5 5 5 5"></path><path d="m15 7 5 5-5 5"></path></svg></button> {specialTextVisible.text1 && (<span className='special-text'>My journey in tech began in May 2022, driven by a fascination with the intricate design and functionality of websites. At the age of 19, I dove into web development, eager to understand how digital experiences come to life and seamlessly blend design with functionality.</span>)}
            </p>


            <p>
            Since then, I’ve dedicated myself to continuous learning and refining my skills. Every challenge along the way has been an opportunity to grow, strengthening my drive to become a well-rounded software engineer. I remain focused on my goals, with an unwavering determination to reach new heights.
            </p>

            <p>
            In December 2023, I joined Tata Consultancy Services (TCS) as a Software Engineer - Site Reliability Engineering.<button onClick={() => displaySpecialText('text2')} type="button" class="cursor-pointer rounded-md bg-zinc-700 px-1 py-[0.5] text-sm font-normal text-zinc-400 transition-colors hover:bg-zinc-500 hover:text-zinc-50 hover:opacity-100 relative -top-[2px] ml-1.5 opacity-80"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-left-right relative -top-[1.35px] inline-block"><path d="m9 7-5 5 5 5"></path><path d="m15 7 5 5-5 5"></path></svg></button>
            
             {specialTextVisible.text2 && (<span className='special-text'>In this role, I’m responsible for monitoring critical batch processes and SnapLogic pipelines, ensuring everything runs efficiently and seamlessly. I also collaborate with the development team to support production turnarounds and change implementations, ensuring smooth transitions and minimal disruptions.</span>)} 
            
             <button onClick={() => displaySpecialText('text3')} type="button" class="cursor-pointer rounded-md bg-zinc-700 px-1 py-[0.5] text-sm font-normal text-zinc-400 transition-colors hover:bg-zinc-500 hover:text-zinc-50 hover:opacity-100 relative -top-[2px] ml-1.5 opacity-80"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-left-right relative -top-[1.35px] inline-block"><path d="m9 7-5 5 5 5"></path><path d="m15 7 5 5-5 5"></path></svg></button>
            {specialTextVisible.text3 && (  <span className='special-text'>Additionally, I handle root cause analysis for any issues that arise, leveraging my problem-solving skills to quickly identify the causes and implement long-term solutions.</span>)}
            </p>

            <p>
            This role has expanded my expertise in cloud infrastructure, automation, and performance optimization, while providing hands-on experience with critical operational processes. <button onClick={() => displaySpecialText('text4')} type="button" class="cursor-pointer rounded-md bg-zinc-700 px-1 py-[0.5] text-sm font-normal text-zinc-400 transition-colors hover:bg-zinc-500 hover:text-zinc-50 hover:opacity-100 relative -top-[2px] ml-1.5 opacity-80"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-left-right relative -top-[1.35px] inline-block"><path d="m9 7-5 5 5 5"></path><path d="m15 7 5 5-5 5"></path></svg></button>
            {specialTextVisible.text4 && (<span className="special-text">It’s been incredibly rewarding to contribute to the reliability and scalability of essential systems, knowing that my work directly impacts the stability of mission-critical applications.</span>)}
            </p>

            <p>
            With a clear vision for the future, I’m excited to continue growing in this dynamic field, collaborating with talented professionals, and contributing to innovative projects. Let’s navigate this exciting journey together!
            </p>
          </div>

          <div className="extra-btns">
            <a href='https://github.com/msk-saad' target='_blank' className="e-btn">
              <svg role="img" class="h-[20px] w-[20px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor"></path></svg>
              GitHub 
            </a>

            <a href='https://linkedin.com/in/mohammed-saad-k/' className="e-btn" target='_blank'>
              <svg role="img" class="h-[20px] w-[20px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"></path></svg> LinkedIn
            </a>

            <a href='https://www.x.com/md_saad1252' className="e-btn" target='_blank'>
              <svg class="h-[20px] w-[20px]" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" fill="currentColor"></path></svg>
              Twitter
            </a>
            
            <a className="e-btn" href='mailto:developersaad12@gmail.com' target='_blank'>
              <svg class="h-[20px] w-[20px]" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 20 20"><path fill="currentColor" d="M3.87 4h13.25C18.37 4 19 4.59 19 5.79v8.42c0 1.19-.63 1.79-1.88 1.79H3.87c-1.25 0-1.88-.6-1.88-1.79V5.79c0-1.2.63-1.79 1.88-1.79zm6.62 8.6l6.74-5.53c.24-.2.43-.66.13-1.07c-.29-.41-.82-.42-1.17-.17l-5.7 3.86L4.8 5.83c-.35-.25-.88-.24-1.17.17c-.3.41-.11.87.13 1.07z"></path></svg>
              Mail
            </a>
            
            <a href='https://drive.google.com/file/d/13-MKUlLUbyksHWg0AJO5wfU5VS3aoQDL/view?usp=sharing' target='_blank' className="e-btn"> 
              <svg class="h-[20px] w-[20px]" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 20 20"><path fill="currentColor" d="M3.87 4h13.25C18.37 4 19 4.59 19 5.79v8.42c0 1.19-.63 1.79-1.88 1.79H3.87c-1.25 0-1.88-.6-1.88-1.79V5.79c0-1.2.63-1.79 1.88-1.79zm6.62 8.6l6.74-5.53c.24-.2.43-.66.13-1.07c-.29-.41-.82-.42-1.17-.17l-5.7 3.86L4.8 5.83c-.35-.25-.88-.24-1.17.17c-.3.41-.11.87.13 1.07z"></path></svg>
              Resume
            </a>
          </div>

          <div className="connect">
            <p>Feel free to reach out to me. <a href="mailto:developersaad12@gmail.com">Email</a></p>
          </div>
      </div>
    </>
  )
}

export default Home