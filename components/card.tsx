"use client";
import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

type CardProps = {
  skills: string[];
  title: string;
  xOffset: number;
  xEnd: number;
  yOffset: number;
  yEnd: number;
  rotateStart: number;
  rotateEnd: number;
  windowWidth: number;
};
const Card = ({
  skills,
  title,
  xOffset,
  xEnd,
  yOffset,
  yEnd,
  rotateStart,
  rotateEnd,
  windowWidth,
}: CardProps) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.50 1"],
  });
  const xProgress = useTransform(scrollYProgress, [0, 1], [xOffset, xEnd]);
  const yProgress = useTransform(scrollYProgress, [0, 1], [yOffset, yEnd]);
  const rotateProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [rotateStart, rotateEnd],
  );
  console.log(windowWidth);
  return (
    <>
      {windowWidth < 777 ? (
        <section
          className={`bg-white border border-[color:#D8D8D4] rounded-[20px] projects:w-[402px] w-full h-fit `}
          ref={ref}
        >
          <div
            className={`w-full h-[64px] border rounded-t-[20px] text-[24px] text-semibold flex items-center justify-center ${title === "Languages" ? "bg-[color:#D8EFFE] border-[color:#A8BFCE] text-[color:#A8BFCE]" : title === "Front End" ? "bg-[color:#EBD9FF] border-[color:#CA9BFF] text-[color:#CA9BFF]" : "bg-[color:#F0FF98] border-[color:#A3BF00] text-[color:#A3BF00]"}`}
          >
            {title}
          </div>
          <div className="flex flex-col">
            {skills.map((skill, index) => (
              <p
                key={index}
                className={`py-[8px] px-[10px] text-[18px] border-b-[color:#D8D8D4] ${index === skills.length - 1 ? "" : "border-b"}`}
              >
                {skill}
              </p>
            ))}
          </div>
        </section>
      ) : (
        <motion.section
          style={{
            translateX: xProgress,
            translateY: yProgress,
            rotate: rotateProgress,
          }}
          className={`bg-white border border-[color:#D8D8D4] rounded-[20px] w-[402px] h-fit `}
          ref={ref}
        >
          <div
            className={`w-full h-[64px] border rounded-t-[20px] text-[24px] text-semibold flex items-center justify-center ${title === "Languages" ? "bg-[color:#D8EFFE] border-[color:#A8BFCE] text-[color:#A8BFCE]" : title === "Front End" ? "bg-[color:#EBD9FF] border-[color:#CA9BFF] text-[color:#CA9BFF]" : "bg-[color:#F0FF98] border-[color:#A3BF00] text-[color:#A3BF00]"}`}
          >
            {title}
          </div>
          <div className="flex flex-col">
            {skills.map((skill, index) => (
              <p
                key={index}
                className={`py-[8px] px-[10px] text-[18px] border-b-[color:#D8D8D4] ${index === skills.length - 1 ? "" : "border-b"}`}
              >
                {skill}
              </p>
            ))}
          </div>
        </motion.section>
      )}
    </>
  );
};

export default Card;
