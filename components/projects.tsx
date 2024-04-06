import { projects } from "@/constants";
import Sample from "./sample";

const Projects = () => {
  return (
    <section className="projects mb-[120px]" id="projects">
      <h1>Selected Works</h1>
      <span className="flex 2xl:flex-row flex-col 2xl:justify-start items-center flex-wrap gap-5">
        {projects.map((project, index) => (
          <Sample
            key={index}
            title={project.title}
            description={project.description}
            image_url={project.image_url}
            skills={project.skills}
            live_link={project.live_link}
            github_link={project.github_link}
            redirect_link={project.redirect_link}
          />
        ))}
      </span>
    </section>
  );
};

export default Projects;
