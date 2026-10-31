"use client";

import React from "react";
import { COMIC_THEME } from "@/constants/comicTheme";
import { ComicCanvasProps } from "@/types/comic";
import { ExplosionBurst } from "./elements/ExplosionBurst";
import { ComicExclamation } from "./elements/ComicExclamation";
import { SmokeCloud } from "./elements/SmokeCloud";
import { SpeechBubble } from "./elements/SpeechBubble";
import { CornerSpeedBurst } from "./elements/CornerSpeedBurst";

export const ComicCanvas: React.FC<ComicCanvasProps> = ({
  showComicGuidelines = true,
}) => {
  return (
    <main
      className="min-h-screen w-full relative flex flex-col items-center justify-center p-4 md:p-8 select-none"
      style={{
        backgroundColor: COMIC_THEME.paper.bg,
        color: COMIC_THEME.paper.ink,
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(${COMIC_THEME.paper.ink} 1.2px, transparent 1.2px)`,
          backgroundSize: "18px 18px",
        }}
      />

      <div className="relative w-full max-w-5xl min-h-[85vh] bg-[#F7F3EA] border-[3.5px] border-black rounded-lg shadow-[8px_8px_0px_#000] p-6 md:p-12 flex flex-col justify-between overflow-hidden">
        
        <CornerSpeedBurst
          position="top-right"
          color="red"
          size={140}
          className="absolute -top-1 -right-1 z-10 pointer-events-none"
        />

        <CornerSpeedBurst
          position="bottom-left"
          color="blue"
          size={140}
          className="absolute -bottom-1 -left-1 z-10 pointer-events-none"
        />

        {showComicGuidelines && (
          <div className="flex justify-between items-center text-[11px] font-mono tracking-widest text-neutral-500 border-b-2 border-black/15 pb-2">
            <span>⌜ COMIC PORTFOLIO // ASSET PACK ⌝</span>
            <span>VECTOR SVG EDITION</span>
          </div>
        )}

        <div className="flex-1 flex flex-col items-center justify-center text-center py-8">
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <ExplosionBurst size={140} color="#FFDE59">
              <span className="text-xl tracking-wider font-serif">BOOM!</span>
            </ExplosionBurst>

            <SpeechBubble tailPosition="bottom-left">
              <p className="font-extrabold text-sm md:text-base text-black">
                Halo! Aset komik siap digunakan 💬
              </p>
            </SpeechBubble>

            <ComicExclamation size={100} />
            <SmokeCloud size={140} />
          </div>

          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-neutral-900 mb-3 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.15)] font-serif">
            Koleksi Aset Komik
          </h1>
          <p className="text-sm md:text-base text-neutral-700 max-w-lg mx-auto font-medium leading-relaxed">
            Aset seperti pop-art burst, speech bubble, awan asap, tanda seru aksi, hingga efek sudut sudah dibuat dalam format SVG vektor tajam tanpa background kotor.
          </p>
        </div>

        <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-neutral-500 border-t-2 border-black/15 pt-2">
          <span>KURIEITIBU KOMIKKU // STUDIO</span>
          <span>100% CLEAN VECTOR • NO WATERMARK</span>
        </div>
      </div>
    </main>
  );
};
