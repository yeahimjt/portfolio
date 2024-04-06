"use client";
import React, { useEffect, useState } from "react";
import Card from "./card";
import { back_end, front_end, languages } from "@/constants";

const Skills = () => {
  const [width, setWidth] = useState<number | null>(
    typeof window !== "undefined" ? window.innerWidth : null,
  );
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
    <section className="mb-[120px]">
      <h1 className="text-[36px] text-[color:#1D1D1D] font-bold text-center mb-[80px]">
        My toolbox includes:
      </h1>
      <div className="flex projects:flex-row projects:items-start items-center flex-col lg:gap-0 gap-5 ">
        <Card
          skills={languages}
          title="Languages"
          xOffset={-120}
          xEnd={120}
          yOffset={180}
          yEnd={-20}
          rotateStart={24}
          rotateEnd={2}
          windowWidth={width}
        />
        <Card
          skills={front_end}
          title="Front End"
          xOffset={130}
          xEnd={0}
          yOffset={220}
          yEnd={40}
          rotateStart={-10}
          rotateEnd={4}
          windowWidth={width}
        />
        <Card
          skills={back_end}
          title="Back End"
          xOffset={290}
          xEnd={-50}
          yOffset={-80}
          yEnd={0}
          rotateStart={8}
          rotateEnd={-1}
          windowWidth={width}
        />
      </div>
    </section>
  );
};

export default Skills;
