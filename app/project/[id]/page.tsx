"use client";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import { ProjectFull, project_page } from "@/constants";
import { Github, Link } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const pathName = usePathname();
  const path = pathName.split("/")[2] as "linkfolio" | "harbor" | "clinkz";
  let data: ProjectFull;
  if (project_page.hasOwnProperty(path)) {
    data = project_page[path];
    return (
      <>
        <Navigation
          back_redirect={data.back_redirect}
          forward_redirect={data.forward_redirect}
        />
        <section className="space-y-4 px-[28px] py-[40px] relative bg-[color:#F5F5F7] border border-[color:#E6E6E6] rounded-[20px] mb-[50px] drop-shadow-sm">
          <h3 className="text-[24px] text-[color:#1D1D1D] font-semibold">
            {data.title}
          </h3>
          <p>{data.description}</p>
          <span className="flex gap-2 flex-wrap">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="p-2 bg-[color:#1D1D1D] rounded-[8px] w-fit"
              >
                <h3 className="text-[12px] text-[color:#F5F5F7]">{skill}</h3>
              </div>
            ))}
          </span>
          <section className="flex justify-end gap-3">
            {data.live_link ? (
              <a
                href={data.live_link}
                target="_blank"
                className="px-5 py-2 text-[color:#1D1D1E] border border-[color:#424245] rounded-[8px] flex gap-2 hover:border-[color:#67676C] hover:text-[color:#67676C]"
              >
                <Link />
                View Live
              </a>
            ) : (
              ""
            )}
            <a
              href={data.github_link}
              target="_blank"
              className="px-5 py-2 text-[color:#1D1D1E] border border-[color:#424245] rounded-[8px] flex gap-2 hover:border-[color:#67676C] hover:text-[color:#67676C]"
            >
              <Github />
              View Code
            </a>
          </section>
        </section>
        <section className="text-[#1D1D1D] mb-[120px]">
          <Image
            className="w-full rounded-[20px] border border-[color:#E6E6E6]"
            src={data.image_url}
            width={935}
            height={935}
            quality={100}
            alt="project preview"
          />
          <section className="flex flex-wrap sm:gap-10 gap-2 justify-between mt-5 mb-10">
            <span className="flex gap-2">
              <h1 className="font-semibold">Project Type:</h1>
              <p>{data.type}</p>
            </span>
            <span className="flex gap-2">
              <h1 className="font-semibold">Project Duration:</h1>
              <p>{data.duration}</p>
            </span>
          </section>
          <section className="space-y-5">
            <section className="space-y-3">
              <h2 className="font-medium text-[24px]">Overview</h2>
              <p>{data.overview}</p>
            </section>
            <section className="space-y-3">
              <h2 className="font-medium text-[24px]">Features</h2>
              <p>{data.features}</p>
            </section>
            <section className="space-y-3">
              <h2 className="font-medium text-[24px]">Challenges</h2>
              <p>{data.challenges}</p>
            </section>
            <section className="space-y-3">
              <h2 className="font-medium text-[24px]">Results</h2>
              <p>{data.results}</p>
            </section>
          </section>
        </section>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <p className="text-center">This page does not exist</p>
      </>
    );
  }
};

export default page;
