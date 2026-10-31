"use client";

import React from "react";
import { motion, useTransform, useMotionValue, MotionValue } from "framer-motion";

interface ComicSplitScreenProps {
  exitProgress?: MotionValue<number>;
}

export const ComicSplitScreen: React.FC<ComicSplitScreenProps> = ({ exitProgress }) => {
  const defaultProgress = useMotionValue(0);
  const activeProgress = exitProgress ?? defaultProgress;
  const leftExitX = useTransform(activeProgress, [0, 1], ["0%", "-130%"]);
  const rightExitX = useTransform(activeProgress, [0, 1], ["0%", "130%"]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black select-none">
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: "polygon(0 0, 60.5% 0, 40.5% 100%, 0 100%)" }}
      >
        <div
          className="relative w-full h-full bg-[#E63946] overflow-hidden"
          style={{
            backgroundImage: "radial-gradient(#800612 1.8px, transparent 1.8px)",
            backgroundSize: "13px 13px",
          }}
        >
          <div className="absolute inset-x-0 top-0 h-1/2 overflow-hidden z-[2]">
            <img
              src="/town.jpg"
              alt="town"
              loading="eager"
              decoding="sync"
              className="w-full h-full object-cover object-center pointer-events-none select-none"
            />
          </div>

          <div className="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden z-[2] flex items-end">
            <img
              src="/city_skyline.webp"
              alt="City Skyline"
              loading="eager"
              decoding="sync"
              className="w-full h-full object-cover object-bottom pointer-events-none select-none"
            />
          </div>

          <svg className="absolute inset-0 w-full h-full pointer-events-none z-[5] overflow-visible">
            <line x1="-5%" y1="50%" x2="55%" y2="50%" stroke="#141414" strokeWidth="16" strokeLinecap="square" />
            <line x1="-5%" y1="50%" x2="55%" y2="50%" stroke="#F7F3EA" strokeWidth="10" strokeLinecap="square" />
          </svg>
        </div>
      </div>

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: "polygon(60.2% 0, 100% 0, 100% 100%, 40.4% 100%)" }}
      >
        <div
          className="relative w-full h-full bg-[#0096C7] overflow-hidden"
          style={{
            backgroundImage: "radial-gradient(#023E8A 1.8px, transparent 1.8px)",
            backgroundSize: "13px 13px",
          }}
        >
          <div className="absolute left-[46%] right-0 top-0 h-[58%] overflow-hidden z-[2]">
            <img
              src="/building1.jpg"
              alt="Building"
              loading="eager"
              decoding="sync"
              className="w-full h-full object-cover object-center pointer-events-none select-none"
            />
          </div>

          <div className="absolute left-[36%] right-0 top-[58%] bottom-0 overflow-hidden z-[2]">
            <img
              src="/war.jpg"
              alt="War"
              loading="eager"
              decoding="sync"
              className="w-full h-full object-cover object-center pointer-events-none select-none"
            />
          </div>

          <svg className="absolute inset-0 w-full h-full pointer-events-none z-[5] overflow-visible">
            <line x1="40%" y1="58%" x2="105%" y2="58%" stroke="#141414" strokeWidth="16" strokeLinecap="square" />
            <line x1="40%" y1="58%" x2="105%" y2="58%" stroke="#F7F3EA" strokeWidth="10" strokeLinecap="square" />
          </svg>
        </div>
      </div>

      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
        <line x1="62%" y1="-10%" x2="38%" y2="110%" stroke="#141414" strokeWidth="18" strokeLinecap="square" />
        <line x1="62%" y1="-10%" x2="38%" y2="110%" stroke="#F7F3EA" strokeWidth="10" strokeLinecap="square" />
      </svg>

      <div className="absolute inset-0 flex items-end justify-start pointer-events-none z-20 overflow-hidden">
        <motion.div style={{ x: leftExitX }} className="relative flex items-end justify-start h-full w-full">
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-end justify-start h-full"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.3, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute -right-44 sm:-right-68 md:-right-96 lg:-right-[28rem] bottom-[10%] md:bottom-[14%] z-20 pointer-events-none"
            >
              <img
                src="/poupsoftware.svg"
                alt="Software"
                className="w-[46vh] sm:w-[50vh] max-w-[48vw] min-w-[280px] h-auto object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.6)]"
              />
            </motion.div>

            <img
              src="/spiderman.webp"
              alt=""
              aria-hidden="true"
              loading="eager"
              decoding="async"
              className="absolute h-[105vh] md:h-[120vh] max-w-[60vw] w-auto object-contain translate-x-[-8.8%] md:translate-x-[-0.8%] translate-y-[7.2%] filter brightness-0 z-0"
            />
            <img
              src="/spiderman.webp"
              alt="Spider-Man"
              loading="eager"
              decoding="async"
              className="relative h-[105vh] md:h-[120vh] max-w-[60vw] w-auto object-contain translate-x-[-10%] md:translate-x-[-2%] translate-y-[6%] z-10"
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-0 flex items-end justify-end pointer-events-none z-20 overflow-hidden">
        <motion.div style={{ x: rightExitX }} className="relative flex items-end">
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="relative translate-x-[6%] md:translate-x-[7%] flex items-end"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: -30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute -left-28 sm:-left-44 md:-left-64 top-[7%] md:top-[11%] z-20 pointer-events-none"
            >
              <img
                src="/pouprole.svg"
                alt="Role"
                className="w-[46vh] sm:w-[50vh] max-w-[48vw] min-w-[280px] h-auto object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.6)]"
              />
            </motion.div>

            <img
              src="/me.webp"
              alt=""
              aria-hidden="true"
              loading="eager"
              decoding="async"
              className="absolute h-[92vh] md:h-[110vh] max-w-[55vw] w-auto object-contain translate-x-[1.2%] translate-y-[1.2%] filter brightness-0 z-0"
            />
            <img
              src="/me.webp"
              alt="Me"
              loading="eager"
              decoding="async"
              className="relative h-[92vh] md:h-[110vh] max-w-[55vw] w-auto object-contain z-10"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
