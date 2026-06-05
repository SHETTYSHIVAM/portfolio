'use client'
import { useEffect, useState, useRef } from "react";

export default function AtomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const animationFrameRef = useRef<number>(0);
  const lastPositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      lastPositionRef.current = { x: e.clientX, y: e.clientY };

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;

      if (
        target?.closest("button") ||
        target?.closest("a") ||
        target?.closest("[data-cursor='hover']")
      ) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    const handleMouseDown = () => setClicking(true);
    const handleMouseUp = () => setClicking(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>

      <div
        className="fixed top-0 left-0 z-50 pointer-events-none"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          willChange: "transform",
        }}
      >
        {/* Glow effect outer ring */}
        <div
          className={`absolute inset-0 -translate-x-1/2 -translate-y-1/2 transition-all duration-200
          ${hovering ? "scale-200 opacity-40" : "scale-100 opacity-20"}
          ${clicking ? "scale-125" : ""}`}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0, 255, 163, 0.3) 0%, transparent 70%)",
          }}
        />

        {/* Main cursor container */}
        <div
          className={`relative -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out
          ${hovering ? "scale-150" : "scale-100"}
          ${clicking ? "scale-90" : ""}`}
        >
          <div className="relative w-10 h-10">
            {/* Outer glow */}
            <div 
              className="absolute inset-0 rounded-full -m-1"
              style={{
                background: "radial-gradient(circle, rgba(0, 255, 163, 0.15) 0%, transparent 70%)",
              }}
            />

            {/* Orbit 1 - Fast spin */}
            <div 
              className="absolute inset-0 rounded-full animate-spin"
              style={{
                border: "0.75px solid rgba(0, 255, 163, 0.8)",
                boxShadow: "0 0 8px rgba(0, 255, 163, 0.5)",
                animationDuration: "2s",
              }}
            />

            {/* Orbit 2 - Medium spin, rotated */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                border: "0.75px solid rgba(0, 255, 163, 0.5)",
                boxShadow: "0 0 5px rgba(0, 255, 163, 0.3)",
                transform: "rotate(45deg)",
                animation: "spin 3s linear infinite",
              }}
            />

            {/* Orbit 3 - Slow spin, opposite direction */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                border: "0.75px solid rgba(0, 255, 163, 0.3)",
                boxShadow: "0 0 3px rgba(0, 255, 163, 0.2)",
                transform: "rotate(-45deg)",
                animation: "spin 5s linear infinite reverse",
              }}
            />

            {/* Electron dots on orbits */}
            <div 
              className="absolute w-1.5 h-1.5 rounded-full"
              style={{
                top: "50%",
                left: "50%",
                background: "#00ffa3",
                boxShadow: "0 0 6px #00ffa3",
                transform: "translateX(-50%) translateY(-50%)",
                animation: "spin 2s linear infinite",
              }}
            />

            {/* Nucleus - enhanced */}
            <div 
              className="absolute top-1/2 left-1/2 rounded-full transition-all duration-150"
              style={{
                width: hovering ? "14px" : "12px",
                height: hovering ? "14px" : "12px",
                background: "#00ffa3",
                boxShadow: `
                  0 0 10px rgba(0, 255, 163, 1),
                  0 0 20px rgba(0, 255, 163, 0.7),
                  0 0 30px rgba(0, 255, 163, 0.4),
                  inset 0 0 8px rgba(255, 255, 255, 0.3)
                `,
                transform: "translate(-50%, -50%)",
                border: "0.5px solid rgba(255, 255, 255, 0.2)",
              }}
            />
          </div>
        </div>

        {/* Click feedback pulse */}
        {clicking && (
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{
              width: "40px",
              height: "40px",
              border: "1px solid rgba(0, 255, 163, 0.6)",
              borderRadius: "50%",
              animation: "pulse-ring 0.6s ease-out",
              pointerEvents: "none",
            }}
          />
        )}

        <style>{`
          @keyframes pulse-ring {
            from {
              transform: scale(1);
              opacity: 1;
            }
            to {
              transform: scale(1.5);
              opacity: 0;
            }
          }
        `}</style>
      </div>
    </>
  );
}