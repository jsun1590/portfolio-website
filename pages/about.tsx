import type { NextPage } from "next";
import Meta from "@components/Utils/Meta";
import Heading from "@components/Utils/Heading";
import AboutSection from "@components/Sections/AboutSection";

const About: NextPage = () => {
  return (
    <>
      <Meta title="About" desc="Test" />

      <main className="min-h-screen px-[20%]">
        <Heading content="About Me" type="h2" />
        <AboutSection />
      </main>
    </>
  );
};

export default About;
