"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ComicLoadingScreenProps {
  onComplete?: () => void;
  minDurationMs?: number;
  autoDismiss?: boolean;
}

const PRELOAD_IMAGES = [
  "/city_skyline.webp",
  "/building1.jpg",
  "/town.jpg",
  "/war.jpg",
  "/spiderman.webp",
  "/me.webp",
  "/poupsoftware.svg",
  "/pouprole.svg",
  "/suasanaatap.jpg",
  "/rooftop.jpg",
  "/spider2.webp",
  "/mev2.webp",
  "/boom.svg",
  "/pouptellme.svg",
  "/percakapan2.svg",
  "/percakapan3.svg",
  "/percakapan4.svg",
  "/percakapan5.svg",
  "/percakapan6.svg",
  "/comicpoup.svg",
  "/spidercursor.svg",
];

const PRELOAD_VIDEO = "/intro2.mp4";

export const ComicLoadingScreen: React.FC<ComicLoadingScreenProps> = ({
  onComplete,
  minDurationMs = 2000,
  autoDismiss = true,
}) => {
  const [progress, setProgress] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [replayKey, setReplayKey] = useState<number>(0);

  useEffect(() => {
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevBodyOverscroll = document.body.style.overscrollBehavior;
    const prevHtmlOverscroll = document.documentElement.style.overscrollBehavior;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.style.overscrollBehavior = "none";
    document.documentElement.style.overscrollBehavior = "none";

    const preventScroll = (e: Event) => {
      e.preventDefault();
    };

    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });

    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overscrollBehavior = prevBodyOverscroll;
      document.documentElement.style.overscrollBehavior = prevHtmlOverscroll;
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    };
  }, []);

  useEffect(() => {
    setProgress(0);
    setIsFinished(false);

    let completedCount = 0;
    const totalCount = PRELOAD_IMAGES.length + 1;
    let targetPct = 0;

    const increment = () => {
      completedCount++;
      targetPct = Math.round((completedCount / totalCount) * 100);
    };

    PRELOAD_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
      if (img.complete) {
        if ("decode" in img) {
          img.decode().then(increment).catch(increment);
        } else {
          increment();
        }
      } else {
        img.onload = () => {
          if ("decode" in img) {
            img.decode().then(increment).catch(increment);
          } else {
            increment();
          }
        };
        img.onerror = increment;
      }
    });

    const video = document.createElement("video");
    video.preload = "auto";
    video.muted = true;
    video.playsInline = true;
    video.src = PRELOAD_VIDEO;
    let videoHandled = false;
    const onVideoReady = () => {
      if (!videoHandled) {
        videoHandled = true;
        increment();
      }
    };
    video.addEventListener("canplaythrough", onVideoReady, { once: true });
    video.addEventListener("loadeddata", onVideoReady, { once: true });
    video.addEventListener("error", onVideoReady, { once: true });
    video.load();

    fetch(PRELOAD_VIDEO, { cache: "force-cache" })
      .then((res) => res.blob())
      .then(() => onVideoReady())
      .catch(() => onVideoReady());

    setTimeout(onVideoReady, 3000);

    const startTime = performance.now();
    let currentDisplayPct = 0;

    const ticker = setInterval(() => {
      const timeRatio = Math.min(1, (performance.now() - startTime) / minDurationMs);
      const timeFloorPct = Math.round(timeRatio * 100);
      const achievablePct = Math.min(targetPct, timeFloorPct);

      if (currentDisplayPct < achievablePct) {
        currentDisplayPct += 1;
        setProgress(currentDisplayPct);
      } else if (currentDisplayPct < timeFloorPct && targetPct >= 100) {
        currentDisplayPct += 1;
        setProgress(currentDisplayPct);
      }

      if (currentDisplayPct >= 100 && targetPct >= 100) {
        clearInterval(ticker);
        if (autoDismiss) {
          setTimeout(() => {
            setIsFinished(true);
            if (onComplete) onComplete();
          }, 350);
        }
      }
    }, 18);

    return () => clearInterval(ticker);
  }, [autoDismiss, minDurationMs, onComplete, replayKey]);

  const dotsTemplate = ".".repeat(140);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="comic-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden select-none"
        >
          <img
            src="/desainloading.jpg"
            alt="Loading Background"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0"
          />

          <div className="absolute top-0 inset-x-0 z-20 flex justify-center pointer-events-none select-none">
            <img
              src="/waitingbergantung.png"
              alt="Spider-Man"
              className="h-[76vh] sm:h-[84vh] md:h-[90vh] lg:h-[92vh] max-w-[95vw] w-auto object-contain object-top drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)] pointer-events-none select-none"
            />
          </div>

          <div
            onClick={() => {
              if (!autoDismiss && progress >= 100) {
                setReplayKey((k) => k + 1);
              }
            }}
            style={{ fontFamily: "'Comica', cursive, sans-serif" }}
            className={`absolute bottom-4 sm:bottom-6 md:bottom-8 inset-x-0 z-30 flex flex-col items-start px-6 sm:px-12 md:px-16 lg:px-20 w-full select-none ${
              !autoDismiss && progress >= 100 ? "cursor-pointer" : ""
            }`}
          >
            <div className="flex flex-col items-start w-full text-[#171717]">
              <span className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wider text-[#171717]">
                waiting for loading
              </span>

              <div className="flex items-center justify-between w-full mt-2 sm:mt-3 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#171717]">
                <div className="flex-1 relative overflow-hidden h-[1.3em] mr-4">
                  <div
                    className="absolute inset-y-0 left-0 overflow-hidden whitespace-nowrap tracking-[0.2em] text-[#171717]"
                    style={{ width: `${progress}%` }}
                  >
                    {dotsTemplate}
                  </div>
                </div>
                <span className="font-bold tracking-normal whitespace-nowrap min-w-[3.5ch] text-right text-white">
                  {progress}%
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
