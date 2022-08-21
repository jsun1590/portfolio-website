import projectsData from "data/projects.json";
import Project from "./Project";
import * as icons from "simple-icons/icons";
interface Props {
  id: string;
  src: string;
  link: string;
  name: string;
  description: string;
  technologies: { [key: string]: keyof typeof icons | string | undefined };
}
const ProjectsSection = () => {
  return (
    <section className="grid grid-cols-1">
      {projectsData.map((project: Props) => (
        <Project key={project.id} project={project} />
      ))}
    </section>
  );
};

export default ProjectsSection;
