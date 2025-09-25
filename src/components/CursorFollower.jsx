import React, { useEffect, useState } from "react";

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y + 30, // center the circle
        left: position.x + 0, // center the circle
        width: 20,
        height: 20,
        borderRadius: "50%",
        backgroundColor: "blue",
        border: "2px solid blue",
        boxShadow: "0 0 10px rgba(0, 0, 255, 0.5)",
        pointerEvents: "none", // cursor can interact with page
        transition: "transform 0.05s linear",
        transform: `translate3d(0, 0, 0)`,
        zIndex: 9999,
      }}
    />
  );
};

export default CursorFollower;
