import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projectData";
import { useReveal } from "@/hooks/useReveal";

const Projects = () => {
  useReveal();

  return (
    <section id="projects" className="min-h-screen justify-center bg-gray-800 md:pt-0 pt-10 text-white">
      <div className="container-section">
        <h2 data-reveal className="section-title text-center text-white">Projects</h2>
        <p data-reveal className="section-subtitle text-center mx-auto text-gray-300">
          Explore my latest projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              data-reveal
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
