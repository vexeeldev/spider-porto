"use client";

import React from "react";

interface ExplosionBurstProps {
  className?: string;
  size?: number;
  color?: string;
  children?: React.ReactNode;
}

export const ExplosionBurst: React.FC<ExplosionBurstProps> = ({
  className = "",
  size = 180,
  color = "#FFE600",
  children,
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[4px_4px_0px_#000]"
      >
        <defs>
          <pattern id="halftoneBurst" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#E65100" opacity="0.35" />
          </pattern>
        </defs>

        <path
          d="M100 8 L118 64 L175 35 L144 88 L194 112 L137 132 L164 185 L111 156 L96 195 L79 152 L26 182 L55 130 L6 106 L58 84 L27 34 L85 62 Z"
          fill="#111"
          transform="translate(4, 4)"
        />

        <path
          d="M100 8 L118 64 L175 35 L144 88 L194 112 L137 132 L164 185 L111 156 L96 195 L79 152 L26 182 L55 130 L6 106 L58 84 L27 34 L85 62 Z"
          fill={color}
          stroke="#000"
          strokeWidth="6"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        <path
          d="M100 8 L118 64 L175 35 L144 88 L194 112 L137 132 L164 185 L111 156 L96 195 L79 152 L26 182 L55 130 L6 106 L58 84 L27 34 L85 62 Z"
          fill="url(#halftoneBurst)"
        />

        <path d="M16 106 L34 98" stroke="#000" strokeWidth="4" strokeLinecap="round" />
        <path d="M185 92 L198 84" stroke="#000" strokeWidth="4" strokeLinecap="round" />
        <path d="M88 185 L84 198" stroke="#000" strokeWidth="4" strokeLinecap="round" />
      </svg>
      {children && (
        <div className="absolute inset-0 flex items-center justify-center font-black text-black z-10 select-none">
          {children}
        </div>
      )}
    </div>
  );
};

