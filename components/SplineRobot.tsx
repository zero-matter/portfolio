"use client";

import Spline from "@splinetool/react-spline";

export function SplineRobot() {
  return (
    <div className="w-full h-full">
      <Spline
        scene="/robot.spline"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
