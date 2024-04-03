import { Folder, Layers3, Mail, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav>
      <Link href="/">
        <Image src="/logo.png" width={50} height={53} alt="Logo" />
      </Link>
      <section className="nav-link">
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
    </nav>
  );
};

export default Nav;
