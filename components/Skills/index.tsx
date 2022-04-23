import React from "react";
import Image from "next/image";
import skillsData from "data/skills.json";
import Heading from "@components/Heading";

const Skills = () => {
  return (
    <>
      <Heading content="Technologies" type="h2" />
      <div className="grid grid-cols-6 gap-8 mx-auto justify-items-center align-center">
        {skillsData.map((skill) => (
          <Image
            src={"/skills/" + skill.src}
            width={skill.width}
            height={skill.height}
          />
        ))}
      </div>
    </>
  );
};

export default Skills;
