import React, { useState, useRef } from "react";

const skills = [
  { name: "HTML", percent: 90 },
  { name: "CSS", percent: 85 },
  { name: "JavaScript", percent: 80 },
  { name: "React", percent: 75 },
  { name: "Node.js", percent: 70 },
];

const blue = "#2196f3";
const blueAccent = "#72b7fa";

const SkillBar = ({ name, percent, isHovered, onMouseEnter, onMouseLeave }) => {
  const [displayedPercent, setDisplayedPercent] = useState(percent);
  const [displayedBlocks, setDisplayedBlocks] = useState(Math.round(percent / 10));
  const percentRef = useRef(null);
  const blocksRef = useRef(null);

  React.useEffect(() => {
    if (isHovered) {
      let startPercent = 0;
      let startBlocks = 0;
      clearInterval(percentRef.current);
      clearInterval(blocksRef.current);
      percentRef.current = setInterval(() => {
        startPercent += 2;
        if (startPercent >= percent) {
          setDisplayedPercent(percent);
          clearInterval(percentRef.current);
        } else {
          setDisplayedPercent(startPercent);
        }
      }, 10);
      blocksRef.current = setInterval(() => {
        startBlocks += 1;
        const finalBlocks = Math.round(percent / 10);
        if (startBlocks >= finalBlocks) {
          setDisplayedBlocks(finalBlocks);
          clearInterval(blocksRef.current);
        } else {
          setDisplayedBlocks(startBlocks);
        }
      }, 80);
    } else {
      setDisplayedPercent(percent);
      setDisplayedBlocks(Math.round(percent / 10));
      clearInterval(percentRef.current);
      clearInterval(blocksRef.current);
    }
    return () => {
      clearInterval(percentRef.current);
      clearInterval(blocksRef.current);
    };
  }, [isHovered, percent]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "24px",
        cursor: "pointer",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        transition: "transform 0.22s cubic-bezier(.44,2,.5,1.1)",
        boxShadow: isHovered
          ? `0 2px 18px ${blue}55, 0 0 0 3px ${blueAccent}55`
          : "none",
        borderRadius: 12,
        background: isHovered ? "#232a33" : "transparent",
        padding: isHovered ? "10px 8px" : "0",
        fontFamily: "monospace",
        flexWrap: "wrap", // ✅ allow wrapping on small screens
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Skill name */}
      <span
        style={{
          minWidth: 90,
          flex: "0 0 auto",
          color: "#fff",
          fontSize: "1.1em",
          letterSpacing: "1px",
          marginRight: 8,
        }}
      >
        {name}
      </span>

      {/* Percent */}
      <span
        style={{
          minWidth: 40,
          flex: "0 0 auto",
          color: blue,
          fontWeight: 700,
          textAlign: "right",
          marginRight: 12,
          fontSize: "1em",
        }}
      >
        {Math.round(displayedPercent)}%
      </span>

      {/* Progress bar */}
      <div
        style={{
          flex: 1, // ✅ take remaining width
          background: "#242c39",
          borderRadius: 4,
          height: 26,
          margin: "6px 0",
          display: "flex",
          alignItems: "center",
          padding: "2px 4px",
          minWidth: 120,
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${percent}%`,
            background: blue,
            borderRadius: 3,
            transition: "width 0.5s",
            display: "flex",
          }}
        >
          {Array.from({ length: displayedBlocks }).map((_, i) => (
            <div
              key={i}
              style={{
                width: 16,
                height: "100%",
                marginRight: 3,
                background: blueAccent,
                opacity: 0.95,
                borderRadius: 2,
                transition: "height 0.2s",
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      style={{
        width: "100%", // ✅ full width
        maxWidth: 800, // ✅ limit on desktop
        background: "#17202A",
        borderRadius: 22,
        padding: "28px",
        fontFamily: "monospace",
        color: "#fff",
        boxShadow: "0 0 48px #0007",
        margin: "0 auto", // ✅ center
      }}
    >
      <div
        style={{
          marginBottom: 28,
          fontSize: "1.2em",
          fontWeight: 700,
          letterSpacing: "1px",
          textAlign: "center",
        }}
      >
        My Skills
      </div>

      {skills.map((skill) => (
        <SkillBar
          key={skill.name}
          name={skill.name}
          percent={skill.percent}
          isHovered={hovered === skill.name}
          onMouseEnter={() => setHovered(skill.name)}
          onMouseLeave={() => setHovered(null)}
        />
      ))}
    </div>
  );
};

export default Skills;
