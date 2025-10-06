import React from "react";
import Spline from '@splinetool/react-spline';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative bg-gray-900 bg-gradient-to-b from-gray-900 to-black">
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text-dark leading-tight">
                    Hi, I'm MR-PK
                </h1>
                <p className="text-lg md:text-2xl text-gray-300 mb-6">
                    I build modern web applications with React & Tailwind CSS
                </p>
                <a
                    href="#projects"
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors duration-300 cursor-pointer"
                >
                    See My Projects
                </a>
            </div>
            {/* 3D Model Integration */}
            <Spline scene="https://prod.spline.design/Df5xKkOtiULuBSgZ/scene.splinecode" />
        </section>
    )
}

export default Hero;