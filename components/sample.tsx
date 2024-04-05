import { Project, ProjectPreview } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Sample = (props: Project) => {
  return (
    <Link
      href={props.redirect_link}
      className="max-w-[670px] group hover:bg-[color:#E8E8EB] hover:border-[color:#D9D9D9] flex  w-full bg-[color:#F5F5F7] overflow-hidden min-h-[372px] relative border border-[color:#E6E6E6] rounded-[8px]"
    >
      <section className="w-[345px] space-y-4 px-[28px] py-[40px] relative ">
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
        className=" drop-shadow-md absolute -right-48 top-4 group-hover:translate-y-2 group-hover:-translate-x-6 transition-all group-hover:-rotate-3 group-hover:scale-105"
        src={props.image_url}
        width={434}
        height={434}
        quality={100}
        alt=""
      />
    </Link>
  );
};

export default Sample;
