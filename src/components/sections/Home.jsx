import './Home.css';
import Spline from '@splinetool/react-spline';
import {motion} from 'framer-motion';

const Home = ({ scrollToSection, refs }) => {
  return (
    <section
      className="
        h-screen  flex flex-col xl:flex-row  flex-col-reverse items-center
        justify-between bg-gradient-to-b from-blue-700  to-black lg:px-24    px-18 relative overflow-hidden
      "
    >
      {/* Left: Text Container */}
      <div
        /*className="
          w-full md:flex-1 flex flex-col justify-center px-8 py-16 md:px-24 md:py-0 z-10
        "*/
        className='z-40 xl:mb-0 mb-[20%]'
      > 
        <motion.h1
            initial={{opacity:0, y:80}}
            animate={{opacity:1, y:0}}
            transition={{
                type:"spring",
                stiffness: 40,
                damping: 25,
                delay: 2.3,
                duration:1.5,
            }}
          className="
            text-5xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 
          "
        >
          Hi I,m  <br /> <span className='text-blue-500'>Pardip </span> Nayak
        </motion.h1>
        <motion.p
            initial={{opacity:0, y:80}}
            animate={{opacity:1, y:0}}
            transition={{
                type:"spring",
                stiffness: 40,
                damping: 25,
                delay: 2.9,
                duration:1.5,
            }}
          className="
            text-lg sm:text-xl md:text-4xl text-blue-200 mb-8 font-medium drop-shadow
            fadeinup2 opacity-0
          "
        >
          I build modern web applications with React & Tailwind CSS
        </motion.p>
        <motion.button
            initial={{opacity:0, y:80}}
            animate={{opacity:1, y:0}}
            transition={{
                type:"spring",
                stiffness: 40,
                damping: 25,
                delay: 3.5,
                duration:1.5,
            }}
          type="button"
          aria-label="See My Projects"
          onClick={() => scrollToSection(refs.projectsRef)}
          className="
            w-max px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600
            text-white rounded-xl shadow-lg hover:from-blue-600 hover:to-cyan-400
            transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg sm:text-xl
            fadeinup3 opacity-0
          "
        >
          See My Projects
        </motion.button>
      </div>

      {/* Right: Spline 3D Container */}
     
        <Spline className='absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0 ' scene="https://prod.spline.design/Df5xKkOtiULuBSgZ/scene.splinecode" />
      
    </section>
  );
};

export default Home;
