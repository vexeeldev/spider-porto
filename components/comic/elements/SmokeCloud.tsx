"use client";

import React from "react";

interface SmokeCloudProps {
  className?: string;
  size?: number;
}

export const SmokeCloud: React.FC<SmokeCloudProps> = ({
  className = "",
  size = 160,
}) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <svg
        width={size}
        height={Math.round(size * 0.75)}
        viewBox="0 0 200 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[3px_3px_0px_#000]"
      >
        <defs>
          <pattern id="halftoneSmoke" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="#000" opacity="0.35" />
          </pattern>
        </defs>

        <path
          d="M30 110 C15 110 5 95 10 80 C5 65 20 50 35 55 C45 35 75 30 90 45 C105 25 140 25 155 45 C175 40 195 55 190 75 C205 95 185 120 165 115 C155 130 125 130 115 118 C95 130 65 125 55 115 Z"
          fill="#FFFFFF"
          stroke="#000000"
          strokeWidth="5"
          strokeLinejoin="round"
        />

        <path
          d="M20 95 C30 115 65 120 85 112 C105 125 135 122 150 110 C170 112 185 98 180 82 C175 105 150 122 130 118 C110 126 80 122 65 110 C45 118 25 108 20 95 Z"
          fill="url(#halftoneSmoke)"
        />

        <path d="M40 75 C50 65 70 70 75 80" stroke="#000" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M100 65 C115 55 135 60 140 75" stroke="#000" strokeWidth="3" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
};

