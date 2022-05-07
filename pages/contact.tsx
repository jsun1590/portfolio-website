import type { NextPage } from "next";
import Meta from "@components/Utils/Meta";
import Heading from "@components/Heading";

const Contact: NextPage = () => {
  return (
    <>
      <Meta title="Contact" desc="Test" />

      <main className="min-h-screen px-[20%] bg-neutral-800">
        <Heading content={"Contact Me"} type={"h2"} />
      </main>
    </>
  );
};

export default Contact;
