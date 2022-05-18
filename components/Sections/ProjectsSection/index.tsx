import projectsData from "data/projects.json";
import Project from "./Project";
const ProjectsSection = () => {
  return (
    <section className="flex">
      {projectsData.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </section>
  );
};

export default ProjectsSection;
