import React, { useState, useRef } from 'react';

const skills = [
  { name: 'HTML', percent: 90 },
  { name: 'CSS', percent: 85 },
  { name: 'JavaScript', percent: 80 },
  { name: 'React', percent: 75 },
  { name: 'Node.js', percent: 70 },
];

const blue = '#2196f3';
const blueAccent = '#72b7fa';

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
      }, 80); // time block animation
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
        display: 'flex',
        alignItems: 'center',
        marginBottom: '24px',
        cursor: 'pointer',
        transform: isHovered ? 'scale(1.11)' : 'scale(1)',
        transition: 'transform 0.22s cubic-bezier(.44,2,.5,1.1)',
        boxShadow: isHovered ? `0 2px 18px ${blue}55, 0 0 0 3px ${blueAccent}55` : 'none',
        borderRadius: 12,
        background: isHovered ? '#232a33' : 'transparent',
        padding: isHovered ? '10px 0' : '0',
        fontFamily: 'monospace'
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span style={{ width: 130, color: '#fff', fontFamily: 'monospace', fontSize: '1.35em', letterSpacing: '1px' }}>{name}</span>
      <span style={{
        width: 54,
        color: blue,
        fontWeight: 700,
        textAlign: 'right',
        marginRight: 22,
        fontSize: '1.25em',
        transition: 'color 0.2s'
      }}>
        {Math.round(displayedPercent)}%
      </span>
      <div style={{
        background: '#242c39',
        borderRadius: 4,
        width: 270,
        height: 30,
        margin: '0 18px',
        display: 'flex',
        alignItems: 'center',
        padding: '3px 6px',
      }}>
        <div style={{
          height: '100%',
          width: `${percent}%`,
          background: blue,
          borderRadius: 3,
          transition: 'width 0.5s',
          display: 'flex',
        }}>
          {
            Array.from({ length: displayedBlocks }).map((_, i) =>
              <div key={i} style={{
                width: 20,
                height: '100%',
                marginRight: 4,
                background: blueAccent,
                opacity: 0.95,
                borderRadius: 2,
                transition: 'height 0.2s',
              }}></div>
            )
          }
        </div>
      </div>
      <span style={{ color: blue, fontSize: '1.25em', fontWeight: 600 }}>[</span>
      <span style={{ color: blue, fontSize: '1.25em', marginLeft: 4, fontWeight: 600 }}>[</span>
      <span style={{ color: blue, fontSize: '1.25em', marginLeft: 36, fontWeight: 600 }} >]</span>
    </div>
  );
};

const Skills = () => {
  const [hovered, setHovered] = useState(null);
  return (
    <div style={{
      width: 800,
      background: '#17202A',
      borderRadius: 22,
      padding: '48px 54px',
      fontFamily: 'monospace',
      color: '#fff',
      boxShadow: '0 0 48px #0007'
    }}>
      <div style={{ marginBottom: 38, fontSize: '1.3em', fontWeight: 800, letterSpacing: '1px' }}>
        My Skills
      </div>
      {skills.map(skill =>
        <SkillBar
          key={skill.name}
          name={skill.name}
          percent={skill.percent}
          isHovered={hovered === skill.name}
          onMouseEnter={() => setHovered(skill.name)}
          onMouseLeave={() => setHovered(null)}
        />
      )}
    </div>
  );
};

export default Skills;
