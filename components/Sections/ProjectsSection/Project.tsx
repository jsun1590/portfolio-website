import Image from "next/image";

interface Props {
  project: {
    src: string;
    name: string;
    description: string;
  };
}

const Project = ({ project }: Props) => {
  return (
    <div>
      <Image
        src={"/projects/" + project.src}
        alt={project.name}
        width="200px"
        height="200px"
      />
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <h2>Technologies</h2>
    </div>
  );
};

export default Project;
