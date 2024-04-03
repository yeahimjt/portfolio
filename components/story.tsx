import Image from "next/image";
import React from "react";
import Waving from "./waving";

const Story = () => {
  return (
    <section className="story">
      <span className="flex items-center" id="story">
        <sectiontiotitotitontiotit className="relative w-[350px] h-[350px] overflow-hidden rounded-full">
          <Waving />
        </sectiontiotitotitontiotit>
      </span>
      <span className="story-block">
        <p>
          I was born in{" "}
          <a href="https://www.google.com/search?q=edinburg+texas&oq=Edinburg+Texas&gs_lcrp=EgZjaHJvbWUqDQgAEAAY4wIYsQMYgAQyDQgAEAAY4wIYsQMYgAQyCggBEC4YsQMYgAQyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyEAgGEC4YrwEYxwEYgAQYjgUyBwgHEAAYgAQyBwgIEAAYgAQyBwgJEAAYgATSAQg0MjU3ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8">
            Edinburg, Texas
          </a>{" "}
          and graduated with a Bachelors in Computer Science from the University
          of Texas at San Antonio this past year.
        </p>
        <p>
          Since graduating I have had freelance experience building function web
          applications with cutting edge technologies.
        </p>
        <p>
          In my "free time" I continue to build applications that solve problems
          I encounter frequently, always trying to implement new technologies.
        </p>
      </span>
    </section>
  );
};

export default Story;
