import type { NextPage } from "next";
import Meta from "@components/Utils/Meta";
import Heading from "@components/Heading";

const About: NextPage = () => {
  return (
    <>
      <Meta title="About" desc="Test" />

      <main className="min-h-screen px-[20%] bg-neutral-800"></main>
    </>
  );
};

export default About;
