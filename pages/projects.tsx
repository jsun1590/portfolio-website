import type { NextPage } from "next";
import Meta from "@components/Utils/Meta";
import Heading from "@components/Utils/Heading";
import ProjectsSection from "@components/Sections/ProjectsSection";
const Projects: NextPage = () => {
  return (
    <>
      <Meta title="Projects" desc="Test" />

      <main className="min-h-screen px-[20%]">
        <Heading content="Projects" type="h2" />
        <ProjectsSection />
      </main>
    </>
  );
};

export default Projects;
