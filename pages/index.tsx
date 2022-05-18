import type { NextPage } from "next";
import Meta from "@components/Utils/Meta";
import Skills from "@components/Sections/Skills";
import { useState } from "react";
import HomeIntro from "@components/Sections/HomeIntro";
const Home: NextPage = () => {
  const [animated, setAnimated] = useState(false);
  return (
    <>
      <Meta title="Home" desc="Test" />

      <main className="min-h-screen lg:px-[15%] px-[10%]">
        <h1 className="mb-10 text-6xl text-center sm:text-8xl pt-28 lg:text-9xl">
          <span
            onMouseEnter={() => setAnimated(() => true)}
            onAnimationEnd={() => setAnimated(() => false)}
            className={`${
              animated ? "animate-waving" : ""
            } inline-block origin-[70%_91%] cursor-default`}
          >
            👋
          </span>
          Hi there!
        </h1>
        <HomeIntro />
        <Skills />
      </main>
    </>
  );
};

export default Home;
