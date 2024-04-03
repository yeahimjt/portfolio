"use client";
import React from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));
const Waving = () => {
  return (
    <div className="w-[350px] h-[350px] rounded-full">
      <Spline scene="https://prod.spline.design/xbdnmC9X1Umnq6NP/scene.splinecode" />
    </div>
  );
};

export default Waving;
