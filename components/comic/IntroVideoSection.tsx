"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroVideoSectionProps {
  src?: string;
  startSecond?: number;
  endSecond?: number;
  speed?: number;
  whiteTriggerSecond?: number;
}

export const IntroVideoSection: React.FC<IntroVideoSectionProps> = ({
  src = "/intro2.mp4",
  startSecond = 0,
  endSecond = 11.5,
  speed = 2.0,
  whiteTriggerSecond = 11.5,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showWhiteOverlay, setShowWhiteOverlay] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setShowWhiteOverlay(false);

          const video = videoRef.current;
          if (video) {
            video.currentTime = startSecond;
            video.playbackRate = speed;
            video
              .play()
              .catch(() => {});
          }
        } else {
          setShowWhiteOverlay(false);
          const video = videoRef.current;
          if (video) {
            video.pause();
            video.currentTime = startSecond;
          }
        }
      },
      { threshold: 0.35 }
    );

    const el = containerRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [startSecond, speed]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
  }, [speed]);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.currentTime >= whiteTriggerSecond && !showWhiteOverlay) {
      setShowWhiteOverlay(true);
    }

    if (video.currentTime >= endSecond) {
      video.pause();
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      <video
        ref={videoRef}
        src={src}
        playsInline
        muted
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        className="w-full h-full object-cover"
      />

      <AnimatePresence>
        {showWhiteOverlay && (
          <motion.div
            key="white-overlay"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{
              duration: 1.0,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute inset-0 z-30 bg-white flex flex-col items-center justify-center pointer-events-auto"
          />
        )}
      </AnimatePresence>
    </section>
  );
};
