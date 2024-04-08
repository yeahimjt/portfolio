"use client";
import { Project } from "@/constants";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const Sample = (props: Project) => {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="max-w-[670px] group hover:bg-[color:#E8E8EB] hover:border-[color:#D9D9D9] flex projects:flex-row flex-col  w-full bg-[color:#F5F5F7] overflow-hidden min-h-[372px] relative border border-[color:#E6E6E6] rounded-[8px] cursor-pointer"
      onClick={() => router.push(`${props.redirect_link}`)}
    >
      <section className="projects:w-[345px] space-y-4 px-[28px] py-[40px] relative ">
        <h3 className="text-[24px] text-[color:#1D1D1D] font-semibold">
          {props.title}
        </h3>
        <p>{props.description}</p>
        <span className="flex gap-2 flex-wrap">
          {props.skills.map((skill, index) => (
            <div
              key={index}
              className="p-2 bg-[color:#1D1D1D] rounded-[8px] w-fit"
            >
              <h3 className="text-[12px] text-[color:#F5F5F7]">{skill}</h3>
            </div>
          ))}
        </span>
      </section>
      <Image
        className=" drop-shadow-md projects:absolute relative -right-48 top-4 group-hover:translate-y-2 group-hover:-translate-x-6 transition-all group-hover:-rotate-3 group-hover:scale-105"
        src={props.image_url}
        width={434}
        height={434}
        quality={100}
        alt=""
      />
    </motion.div>
  );
};

export default Sample;
