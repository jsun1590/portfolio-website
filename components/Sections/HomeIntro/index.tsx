import React from "react";
import Image from "next/image";
import Heading from "@components/Utils/Heading";
import Anchor from "@components/Utils/Anchor";

const HomeIntro = () => {
  return (
    <section>
      <Heading content="Introduction" type="h2" />
      <Image
        alt="Portrait 1"
        src="/portrait/portrait_1.jpg"
        width={300}
        height={300}
        className="rounded-[50%]"
      />
      <p>
        My name is Jack, I am a first year{" "}
        <Anchor
          text="Bachelor of Philosophy (Honours)"
          href="https://www.uwa.edu.au/study/courses/bachelor-of-philosophy"
        />{" "}
        student majoring in Computer Science, Finance, and Cybersecurity at the
        University of Western Australia.
      </p>
      <br></br>
      <p>
        I have passion for learning and experimenting with new technologies. I
        have over 4 years of Python scripting experience, specialising in
        automation and over 2 years of experience in responsive website
        development.
      </p>
      <br></br>
      <p>
        I am currently the Secretary of Computer Science Students&apos; Club and
        an Ordinary Committee Member at Coders For Causes.
      </p>
    </section>
  );
};

export default HomeIntro;
