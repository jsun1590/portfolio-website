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
      <Meta title="About" desc="Test" />

      <main className="min-h-screen px-[20%] bg-neutral-800">
        
        
      </main>

      <Footer />
    </>
  );
};

export default Home;
