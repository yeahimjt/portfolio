import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type NavigationProps = {
  back_redirect: string;
  forward_redirect: string;
};

const Navigation = ({ back_redirect, forward_redirect }: NavigationProps) => {
  return (
    <nav>
      <Link
        href="/"
        className="hover:scale-105 transition-all select-none"
        draggable={false}
      >
        <Image
          src="/logo.png"
          width={50}
          height={53}
          alt="Logo"
          draggable={false}
        />
      </Link>

      <section className="nav-link ">
        <Link href={back_redirect} draggable={false}>
          <ArrowLeft
            className="group-hover:translate-y-1 transition-all"
            width={22}
            height={22}
          />
          <p className="sm:flex hidden">Previous Project</p>
        </Link>
        <Link href={forward_redirect} draggable={false}>
          <ArrowRight
            className="group-hover:translate-y-1 transition-all"
            width={22}
            height={22}
          />
          <p className="sm:flex hidden">Next Project</p>
        </Link>
      </section>
    </nav>
  );
};

export default Navigation;
