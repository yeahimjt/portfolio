"use client";
import { Copy, File, FileText, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-[color:#F5F5F7] px-[20px] py-[40px] border border-[color:#E6E6E6] rounded-[20px]"
      id="connect"
    >
      <section className="flex lg:flex-row flex-col lg:justify-between lg:items-end gap-5">
        <section>
          <h2 className="lg:text-[36px] text-[18px] font-medium text-[color:#67676C]">
            Ready to work together?
          </h2>
          <h1 className="lg:text-[54px] text-[25px] font-semibold text-[color:#1D1D1D]">
            I&apos;m only one click away!
          </h1>
        </section>
        <a
          className="px-8 py-4 mr-5 mb-2 bg-[color:#1D1D1D] lg:w-fit w-full text-center hover:bg-[color:#67676C] text-white rounded-[8px]"
          href="mailto:yeahimjt@gmail.com"
        >
          <p>Send Me A Message</p>
        </a>
      </section>
      <hr className="mt-[50px]" />
      <section className="flex justify-between mt-4">
        <section className="flex md:flex-row flex-col md:gap-10 gap-5">
          <h2 className="font-medium">Connect</h2>
          <button
            className="flex gap-5 group"
            onClick={() => navigator.clipboard.writeText("yeahimjt@gmail.com")}
          >
            <Copy className="group-hover:scale-110 transition-all" />
            yeahimjt@gmail.com
          </button>
        </section>
        <section className="flex md:flex-row flex-col md:gap-10 gap-5">
          <h2 className="font-medium">Explore More</h2>
          <section className="flex gap-5">
            <a href="https://linkedin.com/in/jonathan-trevino" target="_blank">
              <Linkedin />
            </a>
            <a href="https://drive.google.com/file/d/1nF-rVSoCrCjV1HGVNu6ecPsWtdulQovs/view?usp=sharing">
              <FileText />
            </a>
            <a href="https://github.com/yeahimjt" target="_blank">
              <Github />
            </a>
          </section>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
