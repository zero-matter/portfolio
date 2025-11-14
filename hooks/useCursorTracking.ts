"use client";

import { useEffect, useState } from "react";

interface CursorPosition {
  x: number;
  y: number;
  normalizedX: number; // -1 to 1
  normalizedY: number; // -1 to 1
}

export function useCursorTracking() {
  const [position, setPosition] = useState<CursorPosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
  });

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      // Normalize to -1 to 1 range
      const normalizedX = (x / window.innerWidth) * 2 - 1;
      const normalizedY = -((y / window.innerHeight) * 2 - 1); // Invert Y axis

      setPosition({
        x,
        y,
        normalizedX,
        normalizedY,
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return position;
}
