import React from "react";
import Skills from "./../Skills";


const Projects = () => {
    return(
        <>
        <div className="flex justify-center items-center mt-10" >
            <span className="text-8xl font-bold  text-center  transition-transform hover:scale-120  ease-in-out hover:bg-blue-600  p-4 rounded " >Skills</span>
        </div>
        <div className=" mt-30 flex justify-center items-center " >
            <Skills/>
            
        </div>
        </>

        
    )
}
export default Projects;