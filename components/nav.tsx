"use client";
import { Folder, Layers3, Mail, Menu, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState<boolean>(false);
  console.log(open);
  return (
    <nav>
      <Link href="/" className="hover:scale-105 transition-all">
        <Image src="/logo.png" width={50} height={53} alt="Logo" />
      </Link>
      <section className="nav-link sm:flex hidden">
        <Link className="group" href="#story">
          <UserRound
            className="group-hover:translate-y-1 transition-all"
            width={22}
            height={22}
          />
          <p>Story</p>
        </Link>

        <Link className="group" href="#projects">
          <Folder
            className="group-hover:translate-y-1 transition-all"
            width={22}
            height={22}
          />
          <p>Projects</p>
        </Link>
        <Link className="group" href="#skills">
          <Layers3
            className="group-hover:translate-y-1 transition-all"
            width={22}
            height={22}
          />
          <p>Skills</p>
        </Link>
        <Link className="group" href="#connect">
          <Mail
            className="group-hover:translate-y-1 transition-all"
            width={22}
            height={22}
          />
          <p>Connect</p>
        </Link>
      </section>
      <section className="sm:hidden block relative">
        <button
          className="bg-[color:#E6E6E6] p-2 rounded-[5px]"
          onClick={() => setOpen(!open)}
        >
          <Menu className="text-[color:#1D1D1D]" />
        </button>
        {open && (
          <span className="flex flex-col gap-5 absolute right-0 z-20 bg-[color:#E6E6E6] px-10 py-5 rounded-[8px] top-12 border border-[color:#F5F5F7]">
            <Link
              className="group"
              href="#story"
              onClick={() => setOpen(!open)}
            >
              <UserRound
                className="group-hover:translate-y-1 transition-all"
                width={22}
                height={22}
              />
              <p>Story</p>
            </Link>

            <Link
              className="group"
              href="#projects"
              onClick={() => setOpen(!open)}
            >
              <Folder
                className="group-hover:translate-y-1 transition-all"
                width={22}
                height={22}
              />
              <p>Projects</p>
            </Link>

            <Link
              className="group"
              href="#skills"
              onClick={() => setOpen(!open)}
            >
              <Layers3
                className="group-hover:translate-y-1 transition-all"
                width={22}
                height={22}
              />
              <p>Skills</p>
            </Link>

            <Link
              className="group"
              href="#connect"
              onClick={() => setOpen(!open)}
            >
              <Mail
                className="group-hover:translate-y-1 transition-all"
                width={22}
                height={22}
              />
              <p>Connect</p>
            </Link>
          </span>
        )}
      </section>
    </nav>
  );
};

export default Nav;
