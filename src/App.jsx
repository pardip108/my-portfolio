//import Navbar from "./components/Navbar";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import { useRef } from "react";

import CursorFollower from "./components/CursorFollower"

import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css' 
import './index.css'
import LoadingScreen from './components/sections/LoadingScreen'

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    section.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={()=> setIsLoaded(true)}/>}
        <CursorFollower/>
        <div
          className={`min-h-screen transition-opacity duration-700 
  ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100 `}
        >
          <Navbar scrollToSection={scrollToSection} 
              refs={{ homeRef, aboutRef, projectsRef, contactRef }} />

      <section ref={homeRef} className="min-h-screen p-10 bg-gray-900">
        <Home scrollToSection={scrollToSection} 
              refs={{ homeRef, aboutRef, projectsRef, contactRef }}/>
      </section>
      <section ref={aboutRef} className="min-h-screen p-10 bg-gray-1000">
        <About />
      </section>
      <section ref={projectsRef} className="min-h-screen p-10 bg-gray-1100">
        <Projects />
      </section>
      <section ref={contactRef} className="max-h-screen  p-10 bg-gray-1200">
        <Contact />
      </section>

        </div>
    </>
  )
}

export default App
