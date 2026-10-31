"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ComicRooftopScreenProps {
  dialogStep: number;
}

export const ComicRooftopScreen: React.FC<ComicRooftopScreenProps> = ({ dialogStep }) => {
  return (
    <motion.div
      key="comic-page"
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ y: "100%" }}
      transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 z-40 bg-black pointer-events-auto overflow-hidden select-none transform-gpu will-change-transform"
      style={{ transform: "translate3d(0,0,0)", backfaceVisibility: "hidden" }}
    >
      <motion.div
        animate={
          dialogStep === 7
            ? {
                scale: 2,
                x: "-34%",
                y: "-30%",
              }
            : {
                scale: 1,
                x: "0%",
                y: "0%",
              }
        }
        transition={{
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative w-full h-full overflow-hidden transform-gpu will-change-transform"
        style={{ transform: "translate3d(0,0,0)", backfaceVisibility: "hidden" }}
      >
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: "polygon(0 0, 60.5% 0, 40.5% 100%, 0 100%)" }}
        >
          <div
            className="relative w-full h-full bg-[#FFD100] overflow-hidden"
            style={{
              backgroundImage: "radial-gradient(#C79800 2px, transparent 2px)",
              backgroundSize: "14px 14px",
            }}
          >
            <div className="absolute top-[3%] md:top-[4%] -left-[1%] z-[1] pointer-events-none">
              <img
                src="/boom.svg"
                alt="Boom"
                loading="eager"
                decoding="sync"
                draggable={false}
                className="w-[60vh] max-w-[54vw] min-w-[420px] h-auto object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.6)] -rotate-6"
              />
            </div>

            <div
              className="absolute inset-0 overflow-hidden z-[1]"
              style={{ clipPath: "polygon(-10% 48%, 70% 36%, 70% 110%, -10% 110%)" }}
            >
              <img
                src="/suasanaatap.jpg"
                alt="Suasana Atap"
                loading="eager"
                decoding="sync"
                draggable={false}
                className="w-full h-full object-cover object-center pointer-events-none select-none"
              />
            </div>

            <svg className="absolute inset-0 w-full h-full pointer-events-none z-[2] overflow-visible">
              <line x1="32%" y1="-5%" x2="25%" y2="43%" stroke="#141414" strokeWidth="16" strokeLinecap="square" />
              <line x1="32%" y1="-5%" x2="25%" y2="43%" stroke="#F7F3EA" strokeWidth="10" strokeLinecap="square" />
              <line x1="-10%" y1="48%" x2="70%" y2="36%" stroke="#141414" strokeWidth="16" strokeLinecap="square" />
              <line x1="-10%" y1="48%" x2="70%" y2="36%" stroke="#F7F3EA" strokeWidth="10" strokeLinecap="square" />
            </svg>

            <div className="absolute inset-y-0 left-0 flex items-center justify-start pointer-events-none translate-x-[2%] translate-y-[2%] z-[3]">
              <AnimatePresence mode="wait">
                {(dialogStep === 1 || dialogStep === 2) && (
                  <motion.div
                    key="pouptellme"
                    initial={{ opacity: 0, scale: 0.6, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.6, y: 15 }}
                    transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
                    className="absolute top-[6%] md:top-[7%] -right-[8vh] md:-right-[12vh] z-20 pointer-events-none rotate-6"
                  >
                    <img
                      src="/pouptellme.svg"
                      alt="Tell Me"
                      loading="eager"
                      decoding="sync"
                      draggable={false}
                      className="w-[46vh] sm:w-[50vh] max-w-[48vw] min-w-[280px] h-auto object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.6)]"
                    />
                  </motion.div>
                )}

                {(dialogStep === 3 || dialogStep === 4) && (
                  <motion.div
                    key="percakapan3"
                    initial={{ opacity: 0, scale: 0.6, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.6, y: 15 }}
                    transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
                    className="absolute top-[6%] md:top-[7%] -right-[8vh] md:-right-[12vh] z-20 pointer-events-none rotate-6"
                  >
                    <img
                      src="/percakapan3.svg"
                      alt="Percakapan 3"
                      loading="eager"
                      decoding="sync"
                      draggable={false}
                      className="w-[46vh] sm:w-[50vh] max-w-[48vw] min-w-[280px] h-auto object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.6)]"
                    />
                  </motion.div>
                )}

                {(dialogStep === 5 || dialogStep === 6 || dialogStep === 7) && (
                  <motion.div
                    key="percakapan5"
                    initial={{ opacity: 0, scale: 0.6, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.6, y: 15 }}
                    transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
                    className="absolute top-[6%] md:top-[7%] -right-[8vh] md:-right-[12vh] z-20 pointer-events-none rotate-6"
                  >
                    <img
                      src="/percakapan5.svg"
                      alt="Percakapan 5"
                      loading="eager"
                      decoding="sync"
                      draggable={false}
                      className="w-[46vh] sm:w-[50vh] max-w-[48vw] min-w-[280px] h-auto object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.6)]"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <img
                src="/spider2.webp"
                alt="Spider"
                loading="eager"
                decoding="sync"
                draggable={false}
                className="h-[92vh] md:h-[98vh] max-w-[55vw] w-auto object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>
        </div>

        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: "polygon(60.2% 0, 100% 0, 100% 100%, 40.4% 100%)" }}
        >
          <div
            className="relative w-full h-full bg-[#E63946] overflow-hidden"
            style={{
              backgroundImage: "radial-gradient(#800612 2px, transparent 2px)",
              backgroundSize: "14px 14px",
            }}
          >
            <div className="absolute left-[46%] right-0 top-0 h-[50%] overflow-hidden z-[2]">
              <img
                src="/rooftop.jpg"
                alt="Rooftop"
                loading="eager"
                decoding="sync"
                draggable={false}
                className="w-full h-full object-cover object-center pointer-events-none select-none"
              />
            </div>

            <svg className="absolute inset-0 w-full h-full pointer-events-none z-[5] overflow-visible">
              <line x1="30%" y1="50%" x2="105%" y2="50%" stroke="#141414" strokeWidth="16" strokeLinecap="square" />
              <line x1="30%" y1="50%" x2="105%" y2="50%" stroke="#F7F3EA" strokeWidth="10" strokeLinecap="square" />
            </svg>
          </div>
        </div>

        <div className="absolute inset-0 flex items-end justify-end pointer-events-none z-20 overflow-hidden">
          <div className="relative flex items-end justify-end h-full translate-x-[8%] md:translate-x-[10%]">
            <AnimatePresence mode="wait">
              {dialogStep === 2 && (
                <motion.div
                  key="percakapan2"
                  initial={{ opacity: 0, scale: 0.6, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.6, y: 15 }}
                  transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
                  className="absolute top-[6%] -left-[14vh] md:-left-[20vh] z-30 pointer-events-none"
                >
                  <img
                    src="/percakapan2.svg"
                    alt="Percakapan 2"
                    loading="eager"
                    decoding="sync"
                    draggable={false}
                    className="w-[50vh] sm:w-[56vh] max-w-[50vw] min-w-[320px] h-auto object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.6)]"
                  />
                </motion.div>
              )}

              {dialogStep === 4 && (
                <motion.div
                  key="percakapan4"
                  initial={{ opacity: 0, scale: 0.6, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.6, y: 15 }}
                  transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
                  className="absolute top-[6%] -left-[14vh] md:-left-[20vh] z-30 pointer-events-none"
                >
                  <img
                    src="/percakapan4.svg"
                    alt="Percakapan 4"
                    loading="eager"
                    decoding="sync"
                    draggable={false}
                    className="w-[50vh] sm:w-[56vh] max-w-[50vw] min-w-[320px] h-auto object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.6)]"
                  />
                </motion.div>
              )}

              {dialogStep === 6 && (
                <motion.div
                  key="percakapan6"
                  initial={{ opacity: 0, scale: 0.6, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.6, y: 15 }}
                  transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
                  className="absolute top-[6%] -left-[14vh] md:-left-[20vh] z-30 pointer-events-none"
                >
                  <img
                    src="/percakapan6.svg"
                    alt="Percakapan 6"
                    loading="eager"
                    decoding="sync"
                    draggable={false}
                    className="w-[50vh] sm:w-[56vh] max-w-[50vw] min-w-[320px] h-auto object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.6)]"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              animate={{ opacity: dialogStep === 7 ? 0 : 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-[3%] right-[6vh] md:right-[9vh] z-20 pointer-events-none -rotate-6"
            >
              <img
                src="/comicpoup.svg"
                alt="Comic Popup"
                loading="eager"
                decoding="sync"
                draggable={false}
                className="w-[18vh] max-w-[18vw] min-w-[120px] h-auto object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.6)]"
              />
            </motion.div>

            <motion.div
              animate={{
                opacity: dialogStep === 7 ? 0 : 1,
                y: dialogStep === 7 ? 90 : 0,
                scale: dialogStep === 7 ? 0.9 : 1,
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-end justify-end h-full"
            >
              <img
                src="/mev2.webp"
                alt=""
                aria-hidden="true"
                loading="eager"
                decoding="sync"
                draggable={false}
                className="absolute h-[90vh] md:h-[98vh] max-w-[55vw] w-auto object-contain translate-x-[1.2%] translate-y-[1.2%] filter brightness-0 z-0"
              />
              <img
                src="/mev2.webp"
                alt="Me V2"
                loading="eager"
                decoding="sync"
                draggable={false}
                className="relative h-[90vh] md:h-[98vh] max-w-[55vw] w-auto object-contain z-10"
              />
            </motion.div>
          </div>
        </div>

        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
          <line x1="62%" y1="-10%" x2="38%" y2="110%" stroke="#141414" strokeWidth="18" strokeLinecap="square" />
          <line x1="62%" y1="-10%" x2="38%" y2="110%" stroke="#F7F3EA" strokeWidth="10" strokeLinecap="square" />
        </svg>
      </motion.div>
    </motion.div>
  );
};

