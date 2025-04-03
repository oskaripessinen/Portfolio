
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projectData";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container-section">
        <h2 className="section-title text-center text-white">Projects</h2>
        <p className="section-subtitle text-center mx-auto text-gray-300">
          Explore my latest projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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
