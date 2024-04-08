"use client";
import React from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));
const Waving = () => {
  return (
    <section className="w-[350px] h-[350px] rounded-full">
      <Spline scene="https://prod.spline.design/xbdnmC9X1Umnq6NP/scene.splinecode" />
    </section>
  );
};

export default Waving;
