import { Folder, Layers3, Mail, Menu, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
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
      <section className="sm:hidden block">
        <button className="bg-[color:#E6E6E6] p-2 rounded-[5px]">
          <Menu className="text-[color:#1D1D1D]" />
        </button>
      </section>
    </nav>
  );
};

export default Nav;
