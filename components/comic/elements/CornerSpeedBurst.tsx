"use client";

import React from "react";

interface CornerSpeedBurstProps {
  className?: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  color?: "red" | "blue" | "yellow";
  size?: number;
}

export const CornerSpeedBurst: React.FC<CornerSpeedBurstProps> = ({
  className = "",
  position = "top-right",
  color = "red",
  size = 180,
}) => {
  const colorMap = {
    red: { fill: "#E63946", dark: "#B71C1C", dots: "#FF8A80" },
    blue: { fill: "#00A3FF", dark: "#0066CC", dots: "#80D8FF" },
    yellow: { fill: "#FFDE59", dark: "#E5A800", dots: "#FFF9C4" },
  };

  const selected = colorMap[color];

  const rotation = {
    "top-right": "rotate-0",
    "bottom-right": "rotate-90",
    "bottom-left": "rotate-180",
    "top-left": "-rotate-90",
  }[position];

  return (
    <div className={`relative inline-block ${rotation} ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[4px_4px_0px_#000]"
      >
        <path d="M0 0 L200 0 L200 200 Z" fill={selected.fill} stroke="#000" strokeWidth="5" />

        <g stroke="#000" strokeWidth="3" opacity="0.6">
          <line x1="200" y1="0" x2="60" y2="40" />
          <line x1="200" y1="0" x2="90" y2="90" />
          <line x1="200" y1="0" x2="130" y2="150" />
          <line x1="200" y1="0" x2="40" y2="10" />
          <line x1="200" y1="0" x2="160" y2="180" />
        </g>

        <path
          d="M0 0 L200 0 L200 12 C180 14 170 30 155 35 C145 25 125 30 115 45 C100 40 85 55 75 70 C60 75 50 95 30 100 C15 105 10 125 0 135 Z"
          fill="#FFF"
          stroke="#000"
          strokeWidth="4"
        />
        <path d="M140 28 C135 40 120 45 110 42" stroke="#000" strokeWidth="3" fill="none" />
        <path d="M95 55 C88 65 72 68 65 62" stroke="#000" strokeWidth="3" fill="none" />
      </svg>
    </div>
  );
};

