import type { NextPage } from "next";
import Meta from "@components/Utils/Meta";
import Heading from "@components/Utils/Heading";

const Blog: NextPage = () => {
  return (
    <>
      <Meta title="Blog" desc="Test" />

      <main className="min-h-screen px-[20%]"></main>
    </>
  );
};

export default Blog;
