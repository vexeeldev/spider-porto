"use client";

import React from "react";

interface SpeechBubbleProps {
  children?: React.ReactNode;
  className?: string;
  tailPosition?: "bottom-left" | "bottom-right";
}

export const SpeechBubble: React.FC<SpeechBubbleProps> = ({
  children,
  className = "",
  tailPosition = "bottom-left",
}) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <div className="relative bg-white border-[3.5px] border-black rounded-[2rem] px-6 py-4 shadow-[5px_5px_0px_#000] z-10">
        {children}
        <div
          className={`absolute -bottom-3 ${
            tailPosition === "bottom-left" ? "left-6" : "right-6"
          } w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[14px] border-t-black`}
        />
        <div
          className={`absolute -bottom-2 ${
            tailPosition === "bottom-left" ? "left-[26px]" : "right-[26px]"
          } w-0 h-0 border-l-[9px] border-l-transparent border-r-[9px] border-r-transparent border-t-[11px] border-t-white z-20`}
        />
      </div>
    </div>
  );
};

