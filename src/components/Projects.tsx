
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projectData";

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen justify-center bg-gray-800 md:pt-0 pt-10 text-white">
      <div className="container-section w-[95%] md:w-full">
        <h2 className="section-title text-center text-white">Projects</h2>
        <p className="section-subtitle text-center mx-auto text-gray-300">
          Explore my latest projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
