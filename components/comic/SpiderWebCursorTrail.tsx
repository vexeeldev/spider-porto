"use client";

import React, { useEffect, useRef } from "react";

interface WebNode {
  x: number;
  y: number;
  alpha: number;
  radials: { x: number; y: number; len: number; angle: number }[];
}

export const SpiderWebCursorTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<WebNode[]>([]);
  const lastPosRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const current = { x: e.clientX, y: e.clientY };
      const last = lastPosRef.current;

      if (!last || Math.hypot(current.x - last.x, current.y - last.y) > 22) {
        const spokes = 8;
        const radials = [];
        const baseAngle = Math.random() * Math.PI;

        for (let s = 0; s < spokes; s++) {
          const angle = baseAngle + (s * (Math.PI * 2)) / spokes + (Math.random() - 0.5) * 0.15;
          const len = 42 + Math.random() * 45;
          radials.push({
            x: current.x + Math.cos(angle) * len,
            y: current.y + Math.sin(angle) * len,
            len,
            angle,
          });
        }

        nodesRef.current.push({
          x: current.x,
          y: current.y,
          alpha: 1.0,
          radials,
        });

        if (nodesRef.current.length > 28) {
          nodesRef.current.shift();
        }

        lastPosRef.current = current;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const nodes = nodesRef.current;

      for (let i = 0; i < nodes.length; i++) {
        nodes[i].alpha *= 0.945;
      }

      nodesRef.current = nodes.filter((n) => n.alpha > 0.03);

      const active = nodesRef.current;
      const len = active.length;

      for (let i = 0; i < len; i++) {
        const node = active[i];
        const a = node.alpha;

        for (let r = 0; r < node.radials.length; r++) {
          const spoke = node.radials[r];

          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(spoke.x, spoke.y);
          ctx.strokeStyle = `rgba(20, 20, 20, ${a * 0.75})`;
          ctx.lineWidth = 3.8;
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(spoke.x, spoke.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${a * 0.95})`;
          ctx.lineWidth = 2.0;
          ctx.stroke();
        }

        for (let ring = 1; ring <= 3; ring++) {
          const factor = ring * 0.33;

          ctx.beginPath();
          for (let r = 0; r <= node.radials.length; r++) {
            const idx = r % node.radials.length;
            const spoke = node.radials[idx];
            const px = node.x + Math.cos(spoke.angle) * (spoke.len * factor);
            const py = node.y + Math.sin(spoke.angle) * (spoke.len * factor);
            if (r === 0) {
              ctx.moveTo(px, py);
            } else {
              ctx.lineTo(px, py);
            }
          }
          ctx.strokeStyle = `rgba(20, 20, 20, ${a * 0.7})`;
          ctx.lineWidth = 3.2;
          ctx.stroke();

          ctx.beginPath();
          for (let r = 0; r <= node.radials.length; r++) {
            const idx = r % node.radials.length;
            const spoke = node.radials[idx];
            const px = node.x + Math.cos(spoke.angle) * (spoke.len * factor);
            const py = node.y + Math.sin(spoke.angle) * (spoke.len * factor);
            if (r === 0) {
              ctx.moveTo(px, py);
            } else {
              ctx.lineTo(px, py);
            }
          }
          ctx.strokeStyle = `rgba(255, 255, 255, ${a * 0.9})`;
          ctx.lineWidth = 1.6;
          ctx.stroke();
        }

        if (i < len - 1) {
          const next = active[i + 1];

          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(next.x, next.y);
          ctx.strokeStyle = `rgba(20, 20, 20, ${a * 0.8})`;
          ctx.lineWidth = 4.8;
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(next.x, next.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${a * 1.0})`;
          ctx.lineWidth = 2.6;
          ctx.stroke();

          for (let k = 0; k < 4; k++) {
            const r1 = node.radials[k * 2];
            const r2 = next.radials[(k * 2 + 1) % next.radials.length];
            if (r1 && r2) {
              ctx.beginPath();
              ctx.moveTo(r1.x, r1.y);
              ctx.lineTo(r2.x, r2.y);
              ctx.strokeStyle = `rgba(20, 20, 20, ${a * 0.6})`;
              ctx.lineWidth = 2.8;
              ctx.stroke();

              ctx.beginPath();
              ctx.moveTo(r1.x, r1.y);
              ctx.lineTo(r2.x, r2.y);
              ctx.strokeStyle = `rgba(255, 255, 255, ${a * 0.85})`;
              ctx.lineWidth = 1.4;
              ctx.stroke();
            }
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
    />
  );
};
