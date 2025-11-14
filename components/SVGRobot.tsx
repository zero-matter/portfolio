"use client";

import { useCursorTracking } from "@/hooks/useCursorTracking";
import { motion } from "framer-motion";

export function SVGRobot() {
  const cursor = useCursorTracking();

  // Calculate rotation based on normalized cursor position
  // Limit the rotation angles for realistic head movement
  const headRotateY = cursor.normalizedX * 25; // Max ±25 degrees horizontal
  const headRotateX = cursor.normalizedY * 15; // Max ±15 degrees vertical

  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 200 250"
        className="w-full h-full max-w-md"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Define gradient for cyan glow */}
        <defs>
          <linearGradient id="cyanGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00d9ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00b8d9" stopOpacity="0.4" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Robot Body - Static */}
        <g id="body">
          {/* Main Body */}
          <rect
            x="60"
            y="120"
            width="80"
            height="90"
            rx="8"
            fill="#1a2332"
            stroke="#00d9ff"
            strokeWidth="2"
          />

          {/* Body Details */}
          <circle cx="85" cy="150" r="8" fill="#00d9ff" opacity="0.3" />
          <circle cx="115" cy="150" r="8" fill="#00d9ff" opacity="0.3" />
          <rect
            x="75"
            y="170"
            width="50"
            height="4"
            rx="2"
            fill="#00d9ff"
            opacity="0.5"
          />
          <rect
            x="75"
            y="180"
            width="50"
            height="4"
            rx="2"
            fill="#00d9ff"
            opacity="0.5"
          />

          {/* Arms */}
          <rect
            x="35"
            y="130"
            width="20"
            height="60"
            rx="10"
            fill="#1a2332"
            stroke="#00d9ff"
            strokeWidth="2"
          />
          <rect
            x="145"
            y="130"
            width="20"
            height="60"
            rx="10"
            fill="#1a2332"
            stroke="#00d9ff"
            strokeWidth="2"
          />

          {/* Legs */}
          <rect
            x="70"
            y="210"
            width="20"
            height="30"
            rx="4"
            fill="#1a2332"
            stroke="#00d9ff"
            strokeWidth="2"
          />
          <rect
            x="110"
            y="210"
            width="20"
            height="30"
            rx="4"
            fill="#1a2332"
            stroke="#00d9ff"
            strokeWidth="2"
          />
        </g>

        {/* Robot Head - Animated with cursor tracking */}
        <motion.g
          id="head"
          style={{
            originX: "100px",
            originY: "70px",
          }}
          animate={{
            rotateY: headRotateY,
            rotateX: -headRotateX,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            mass: 0.5,
          }}
        >
          {/* Head Shadow for 3D effect */}
          <ellipse
            cx="100"
            cy="95"
            rx="42"
            ry="8"
            fill="#000"
            opacity="0.2"
          />

          {/* Main Head */}
          <rect
            x="60"
            y="40"
            width="80"
            height="70"
            rx="12"
            fill="#1a2332"
            stroke="#00d9ff"
            strokeWidth="2"
            filter="url(#glow)"
          />

          {/* Antenna */}
          <line
            x1="100"
            y1="40"
            x2="100"
            y2="25"
            stroke="#00d9ff"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="100" cy="20" r="5" fill="#00d9ff" filter="url(#glow)">
            <animate
              attributeName="opacity"
              values="0.5;1;0.5"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Eyes */}
          <motion.g
            id="eyes"
            animate={{
              x: cursor.normalizedX * 3,
              y: -cursor.normalizedY * 2,
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 15,
            }}
          >
            <circle
              cx="80"
              cy="70"
              r="10"
              fill="url(#cyanGlow)"
              filter="url(#glow)"
            />
            <circle cx="80" cy="70" r="5" fill="#fff" />
            <circle
              cx="120"
              cy="70"
              r="10"
              fill="url(#cyanGlow)"
              filter="url(#glow)"
            />
            <circle cx="120" cy="70" r="5" fill="#fff" />
          </motion.g>

          {/* Mouth */}
          <path
            d="M 80 90 Q 100 95 120 90"
            stroke="#00d9ff"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />

          {/* Ear/Side Panels */}
          <circle
            cx="55"
            cy="65"
            r="8"
            fill="#1a2332"
            stroke="#00d9ff"
            strokeWidth="2"
          />
          <circle
            cx="145"
            cy="65"
            r="8"
            fill="#1a2332"
            stroke="#00d9ff"
            strokeWidth="2"
          />
        </motion.g>

        {/* Neck */}
        <rect
          x="85"
          y="110"
          width="30"
          height="15"
          rx="4"
          fill="#1a2332"
          stroke="#00d9ff"
          strokeWidth="2"
        />

        {/* Breathing Animation - Subtle body pulse */}
        <animate
          href="#body"
          attributeName="opacity"
          values="1;0.95;1"
          dur="3s"
          repeatCount="indefinite"
        />
      </svg>
    </div>
  );
}
