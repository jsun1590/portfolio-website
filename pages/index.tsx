import type { NextPage } from "next";
import Meta from "@components/Utils/Meta";
import NavBar from "@components/Utils/NavBar";
import Skills from "@components/Skills";
import Footer from "@components/Utils/Footer";
import { useState } from "react";
import Heading from "@components/Heading";

const Home: NextPage = () => {
  const [animated, setAnimated] = useState(false);
  return (
    <>
      <Meta title="Home" desc="Test" />
      <NavBar />

      <main className="min-h-screen px-[20%] bg-neutral-800">
        
        <h1 className="mb-10 text-center text-white pt-28 text-9xl">
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

        <Skills />
      </main>

      <Footer />
    </>
  );
};

export default Home;
