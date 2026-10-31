"use client";

import React from "react";

interface ComicExclamationProps {
  className?: string;
  size?: number;
}

export const ComicExclamation: React.FC<ComicExclamationProps> = ({
  className = "",
  size = 120,
}) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 140 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[3px_3px_0px_#000]"
      >
        <g transform="translate(14, 25) rotate(-14 20 50)">
          <path
            d="M8 8 L24 10 L18 64 L10 64 Z"
            fill="#E63946"
            stroke="#000"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <circle cx="14" cy="78" r="6" fill="#E63946" stroke="#000" strokeWidth="4" />
        </g>

        <g transform="translate(56, 10)">
          <path
            d="M8 8 L26 8 L20 72 L12 72 Z"
            fill="#FF2A2A"
            stroke="#000"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <circle cx="16" cy="88" r="7" fill="#FF2A2A" stroke="#000" strokeWidth="4" />
        </g>

        <g transform="translate(94, 25) rotate(14 20 50)">
          <path
            d="M8 8 L24 10 L18 64 L10 64 Z"
            fill="#E63946"
            stroke="#000"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <circle cx="14" cy="78" r="6" fill="#E63946" stroke="#000" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
};

