import Image from "next/image";
import React from "react";
import Waving from "./waving";

const Story = () => {
  return (
    <section className="story">
      <section className="flex items-center" id="story">
        <section className="relative w-[350px] h-[350px] overflow-hidden rounded-full mx-auto">
          <Waving />
        </section>
      </section>
      <section className="story-block">
        <p>
          I was born in{" "}
          <a href="https://www.google.com/search?q=edinburg+texas&oq=Edinburg+Texas&gs_lcrp=EgZjaHJvbWUqDQgAEAAY4wIYsQMYgAQyDQgAEAAY4wIYsQMYgAQyCggBEC4YsQMYgAQyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyEAgGEC4YrwEYxwEYgAQYjgUyBwgHEAAYgAQyBwgIEAAYgAQyBwgJEAAYgATSAQg0MjU3ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8">
            Edinburg, Texas
          </a>{" "}
          and graduated with a Bachelors in Computer Science, with a minor in
          Cyber Security, from the University of Texas at San Antonio this past
          year.
        </p>
        <p>
          Since graduating I have had freelance experience building functional
          web applications with cutting edge technologies.
        </p>
        <p>
          In my "free time" I continue to build applications that solve problems
          I encounter frequently, always trying to implement new technologies.
        </p>
      </section>
    </section>
  );
};

export default Story;
