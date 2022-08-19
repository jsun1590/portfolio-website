import Image from "next/image";
import Heading from "@components/Utils/Heading";
import BrandIcon from "@components/Utils/BrandIcon";
import * as icons from "simple-icons/icons";
import { useTheme } from "next-themes";
import Button from "@components/Utils/Button";

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
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex px-5 py-3 mb-6 space-x-4 border-2 ">
      <div className="flex items-center justify-center basis-1/6">
        <Image
          src={"/projects/" + project.src}
          alt={project.name}
          width="150px"
          height="150px"
        />
      </div>

      <div className="basis-5/6">
        <Heading content={project.name} type={"h3"} />
        <p className="mb-4">{project.description}</p>

        <Heading content="Technologies" type={"h4"} />
        {Object.keys(project.technologies).map((key, index) => (
          <BrandIcon
            key={key}
            icon={("si" + project.technologies[key]) as keyof typeof icons}
            dimensions={50}
            className={
              "inline mr-5 mb-3 " + (theme === "light" ? "" : "invert")
            }
          />
        ))}
        <br />
        <a href={project.link}>
          <Button content={"View Source"} />
        </a>
      </div>
    </div>
  );
};

export default Project;
