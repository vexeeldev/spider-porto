"use client";

import React, { useRef, useState, useEffect } from "react";
import { useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { ComicSplitScreen } from "@/components/comic/ComicSplitScreen";
import { ComicLoadingScreen } from "@/components/comic/ComicLoadingScreen";
import { ComicRooftopScreen } from "@/components/comic/ComicRooftopScreen";

interface PortfolioHomeProps {
  src?: string;
  startSecond?: number;
  endSecond?: number;
  speed?: number;
}

const SCROLL_CLOSE_PX = 750;

export const PortfolioHome: React.FC<PortfolioHomeProps> = ({
  src = "/intro2.mp4",
  startSecond = 0,
  endSecond = 11.5,
  speed = 2.0,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [phase, setPhase] = useState<"hero" | "video" | "white">("hero");
  const [dialogStep, setDialogStep] = useState<number>(1);
  const dialogStepRef = useRef<number>(1);
  const lockRef = useRef<boolean>(false);
  const accRef = useRef<number>(0);

  const rawP = useMotionValue(0);
  const springP = useSpring(rawP, { stiffness: 180, damping: 28, restDelta: 0.001 });

  useEffect(() => {
    const assets = [
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
    ];
    assets.forEach((href) => {
      const img = new Image();
      img.src = href;
    });
  }, []);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (isLoading || lockRef.current) return;

      if (phase === "hero") {
        accRef.current = Math.min(SCROLL_CLOSE_PX, Math.max(0, accRef.current + e.deltaY));
        rawP.set(accRef.current / SCROLL_CLOSE_PX);

        if (accRef.current >= SCROLL_CLOSE_PX) {
          lockRef.current = true;
          setTimeout(() => {
            setPhase("video");
            rawP.set(0);
            springP.jump(0);
            accRef.current = 0;
            const video = videoRef.current;
            if (video) {
              video.currentTime = startSecond;
              video.playbackRate = speed;
              video.play().catch(() => {});
            }
            lockRef.current = false;
          }, 300);
        }
      }

      if (phase === "white") {
        if (e.deltaY > 35) {
          if (dialogStepRef.current < 6) {
            lockRef.current = true;
            const nextStep = dialogStepRef.current + 1;
            dialogStepRef.current = nextStep;
            setDialogStep(nextStep);
            setTimeout(() => {
              lockRef.current = false;
            }, 350);
          } else if (dialogStepRef.current === 6) {
            lockRef.current = true;
            dialogStepRef.current = 7;
            setDialogStep(7);
            setTimeout(() => {
              lockRef.current = false;
            }, 1100);
          }
        } else if (e.deltaY < -35) {
          if (dialogStepRef.current === 7) {
            lockRef.current = true;
            dialogStepRef.current = 6;
            setDialogStep(6);
            setTimeout(() => {
              lockRef.current = false;
            }, 1100);
          } else if (dialogStepRef.current > 2) {
            lockRef.current = true;
            const prevStep = dialogStepRef.current <= 4 ? 2 : 4;
            dialogStepRef.current = prevStep;
            setDialogStep(prevStep);
            setTimeout(() => {
              lockRef.current = false;
            }, 350);
          } else {
            lockRef.current = true;
            setPhase("video");
            dialogStepRef.current = 1;
            setDialogStep(1);
            setTimeout(() => {
              lockRef.current = false;
            }, 900);
          }
        }
      } else if (phase === "video") {
        if (e.deltaY < -40) {
          lockRef.current = true;
          rawP.set(0);
          springP.jump(0);
          accRef.current = 0;
          setPhase("hero");
          const video = videoRef.current;
          if (video) {
            video.pause();
            video.currentTime = startSecond;
          }
          setTimeout(() => {
            lockRef.current = false;
          }, 400);
        } else if (e.deltaY > 40) {
          lockRef.current = true;
          setPhase("white");
          setTimeout(() => {
            lockRef.current = false;
          }, 900);
        }
      }
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, [isLoading, phase, rawP, springP, startSecond, speed]);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.currentTime >= endSecond) {
      video.currentTime = startSecond;
      video.play().catch(() => {});
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      <AnimatePresence>
        {isLoading && (
          <ComicLoadingScreen
            autoDismiss={true}
            onComplete={() => {
              setIsLoading(false);
            }}
          />
        )}
      </AnimatePresence>

      <div
        className="absolute inset-0 z-20"
        style={{ display: phase === "hero" ? "block" : "none" }}
      >
        <ComicSplitScreen exitProgress={springP} startIntro={!isLoading} />
      </div>

      <div
        className="absolute inset-0 z-10"
        style={{ display: phase !== "hero" ? "block" : "none" }}
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
      </div>

      <AnimatePresence>
        {phase === "white" && (
          <ComicRooftopScreen dialogStep={dialogStep} />
        )}
      </AnimatePresence>
    </div>
  );
};
