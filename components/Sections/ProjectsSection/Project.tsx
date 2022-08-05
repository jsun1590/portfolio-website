import Image from "next/image";
import Heading from "@components/Utils/Heading";
import BrandIcon from "@components/Utils/BrandIcon";
import * as icons from "simple-icons/icons";
interface Props {
  project: {
    id: string;
    src: string;
    link: string;
    name: string;
    description: string;
    technologies: { [key: string]: keyof typeof icons | string | undefined };
  };
}

const Project = ({ project }: Props) => {
  return (
    <div className="flex">
      <Image
        src={"/projects/" + project.src}
        alt={project.name}
        width="150px"
        height="150px"
      />
      <div>
        <Heading content={project.name} type={"h3"} />
        <p>{project.description}</p>
        <h2>Technologies</h2>
        {Object.keys(project.technologies).map((key, index) => (
          <BrandIcon
            key={key}
            icon={("si" + project.technologies[key]) as keyof typeof icons}
            dimensions={20}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
