'use client';

import React from 'react';
import { motion } from 'framer-motion';

const SKILL_DATA = [
  { subject: 'AI/ML', value: 90, fullMark: 100 },
  { subject: 'Systems', value: 95, fullMark: 100 },
  { subject: 'Fullstack', value: 85, fullMark: 100 },
  { subject: 'DevOps', value: 80, fullMark: 100 },
  { subject: 'Frontend', value: 88, fullMark: 100 },
];

const SkillRadar = () => {
  const size = 300;
  const center = size / 2;
  const radius = (size / 2) * 0.8;
  const angleStep = (Math.PI * 2) / SKILL_DATA.length;

  const points = SKILL_DATA.map((d, i) => {
    const r = radius * (d.value / d.fullMark);
    const x = center + r * Math.cos(i * angleStep - Math.PI / 2);
    const y = center + r * Math.sin(i * angleStep - Math.PI / 2);
    return `${x},${y}`;
  }).join(' ');

  const gridLevels = [0.2, 0.4, 0.6, 0.8, 1];

  return (
    <div className="flex justify-center items-center py-10 opacity-80 hover:opacity-100 transition-opacity w-full max-w-[300px] mx-auto aspect-square">
      <svg width="100%" height="100%" viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
        {/* Grid Circles */}
        {gridLevels.map((level) => (
          <circle
            key={level}
            cx={center}
            cy={center}
            r={radius * level}
            fill="none"
            stroke="rgba(56, 189, 248, 0.1)"
            strokeWidth="1"
          />
        ))}

        {/* Axis Lines */}
        {SKILL_DATA.map((_, i) => {
          const x = center + radius * Math.cos(i * angleStep - Math.PI / 2);
          const y = center + radius * Math.sin(i * angleStep - Math.PI / 2);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="rgba(56, 189, 248, 0.1)"
              strokeWidth="1"
            />
          );
        })}

        {/* Radar Shape */}
        <motion.polygon
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          points={points}
          fill="rgba(56, 189, 248, 0.2)"
          stroke="rgba(56, 189, 248, 0.8)"
          strokeWidth="2"
          className="drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]"
        />

        {/* Labels */}
        {SKILL_DATA.map((d, i) => {
          const labelRadius = radius + 20;
          const x = center + labelRadius * Math.cos(i * angleStep - Math.PI / 2);
          const y = center + labelRadius * Math.sin(i * angleStep - Math.PI / 2);
          return (
            <text
              key={i}
              x={x}
              y={y}
              fill="rgba(255, 255, 255, 0.4)"
              fontSize="10"
              fontFamily="monospace"
              textAnchor="middle"
              className="uppercase tracking-widest font-bold"
            >
              {d.subject}
            </text>
          );
        })}
      </svg>
    </div>
  );
};

export default SkillRadar;
