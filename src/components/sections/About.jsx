import "./About.css"
import aboutCard1 from "../../../public/aboutCard1.png"
import aboutCard2 from "../../../public/aboutCard2.png"

import AboutCard from "../AboutCard"

const About = () => {
  return (
    <>
    <div className="  text-[60px] sm:text-[100px] md:text-[200px] text-blue-700 font-bold flex items-start justify-center mt-20 archivo-black-regular" >
            <span className="text-stroke-pink hover-change">A</span>
            <span className="text-stroke-pink hover-change">B</span>
            <span className="text-stroke-pink hover-change">O</span>
            <span className="text-stroke-pink hover-change">U</span>
            <span className="text-stroke-pink hover-change">T</span>
            &nbsp;
            <span className="text-stroke-pink hover-change">M</span>
            <span className="text-stroke-pink hover-change">E</span>

    </div>
      <div className="  gap-25 flex  flex-col sm:flex-row items-center justify-center">
        <AboutCard 
         description="Hi! I am passionate about building web applications and exploring new technologies. I enjoy solving real-world problems and contributing to open-source projects. I am always eager to learn and grow as a developer."
          imageLink={aboutCard1}
        />
        <AboutCard  
          description= "I love coding, coffee, and creating things that make life easier. I enjoy learning new tech, building cool projects, and sharing knowledge with others. When I’m not coding, you’ll find me reading, gaming, or exploring new ideas."
          imageLink={aboutCard2}
        />
      </div>
    </>
  )
}

    
export default About;


