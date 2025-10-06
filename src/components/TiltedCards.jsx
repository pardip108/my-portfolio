import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    frontTitle: "ToDo List",
    frontDesc: "Plan and organize daily tasks for improved productivity. Built with a simple, intuitive UI.",
    backTitle: "Features & Tech Stack",
    backDesc:
      `• Add, edit, complete and filter tasks with ease.\n` +
      `• Progress tracking & auto-save state.\n` +
      `• Built with React, Framer Motion, and Tailwind CSS.\n` +
      `• Results: Increased user completion rate by 40%.`,
  },
  {
    frontTitle: "URL Shortener",
    frontDesc: "Create short links with tracking and QR code support. Modern UI for seamless sharing.",
    backTitle: "Features & Tech Stack",
    backDesc:
      `• Instantly generate short URLs.\n` +
      `• Real-time click analytics dashboard.\n` +
      `• Auto-generate QR codes for every link.\n` +
      `• Built using React, REST API, Express.js, and Chart.js.\n` +
      `• Helped users increase link engagement by 25%.`,
  },
  {
    frontTitle: "Weather Info",
    frontDesc: "Get real-time weather updates for any location with clean and animated visuals.",
    backTitle: "Features & Tech Stack",
    backDesc:
      `• Search for current weather by city or coordinates.\n` +
      `• Displays temperature, humidity, and condition icons.\n` +
      `• Responsive animated UI and error handling.\n` +
      `• Built with React, OpenWeatherMap API, and Framer Motion.\n` +
      `• Improved user awareness of weather trends and safety.`,
  },
];

const TiltedCard = ({ project, isFlipped, onClick, style }) => (
  <motion.div
    className="
      w-72 h-48 
      sm:w-80 sm:h-52 
      md:w-96 md:h-64 
      cursor-pointer perspective-1000
    "
    onClick={onClick}
    style={style}
    whileHover={{
      scale: 1.12,
      boxShadow: "0 12px 40px rgba(0,0,0,0.6)",
      zIndex: 2,
    }}
  >
    <motion.div
      className="
        relative w-full h-full rounded-3xl shadow-2xl 
        bg-gradient-to-r from-blue-500 to-indigo-900 
        text-white flex flex-col justify-center items-center text-center
      "
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      style={{
        transformStyle: "preserve-3d",
        position: "relative",
      }}
    >
      {/* Front */}
      <motion.div
        className="
          absolute w-full h-full flex flex-col justify-center items-center 
          px-4 sm:px-6 md:px-10
        "
        style={{ backfaceVisibility: "hidden", position: "absolute", inset: 0 }}
      >
        <h2 className="
          text-xl sm:text-2xl md:text-3xl 
          font-bold mb-3 md:mb-4
        ">
          {project.frontTitle}
        </h2>
        <p className="text-sm sm:text-base md:text-lg opacity-90">{project.frontDesc}</p>
      </motion.div>
      {/* Back */}
      <motion.div
        className="
          absolute w-full h-full flex flex-col justify-center items-center 
          px-4 sm:px-6 md:px-10 
          whitespace-pre-line
        "
        style={{
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
          position: "absolute",
          inset: 0,
        }}
      >
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 md:mb-4">
          {project.backTitle}
        </h2>
        <p className="text-xs sm:text-sm md:text-base">{project.backDesc}</p>
      </motion.div>
    </motion.div>
  </motion.div>
);

export default function TiltedCards() {
  const [flipped, setFlipped] = useState([false, false, false]);

  const toggleFlip = (i) => {
    setFlipped((prev) => {
      const newFlip = [...prev];
      newFlip[i] = !newFlip[i];
      return newFlip;
    });
  };

  // Responsive card styles for tilt angles and margin
  const cardStyles = [
    { transform: "rotate(-9deg)", marginRight: 32 },
    { transform: "rotate(10deg)", marginRight: 32 },
    { transform: "rotate(-6deg)" },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-black py-20 px-4">
      <div className="max-w-4xl mb-14 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-7 tracking-wide drop-shadow-lg">
          My Projects
        </h1>
        <p className="text-lg sm:text-2xl text-gray-300 mb-4">
          Explore solutions built to boost productivity and solve real-life challenges, focusing on modern interfaces and performance.
        </p>
        <p className="text-base sm:text-lg text-gray-400">
          All projects use cutting-edge web development practices, responsiveness, and seamless animations for a great user experience.
        </p>
      </div>
      <div className="
        flex flex-col items-center gap-10 
        md:flex-row md:justify-center md:items-center
      ">
        {projects.map((project, i) => (
          <TiltedCard
            key={i}
            project={project}
            isFlipped={flipped[i]}
            onClick={() => toggleFlip(i)}
            style={cardStyles[i]}
          />
        ))}
      </div>
    </div>
  );
}
