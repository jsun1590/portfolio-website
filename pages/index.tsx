import type { NextPage } from "next";
import Meta from "@components/Utils/Meta";
import NavBar from "@components/Utils/NavBar";
import Skills from "@components/Skills";
import Footer from "@components/Utils/Footer";
import { useState } from "react";

const Home: NextPage = () => {
  const [animated, setAnimated] = useState(false);
  return (
    <>
      <Meta title="Boom" desc="Test" />
      <NavBar />

      <main className="min-h-screen bg-neutral-800">
        <p className="text-center text-white text-9xl mb-9">
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
        </p>

        <Skills />
      </main>

      <Footer />
    </>
  );
};

export default Home;
