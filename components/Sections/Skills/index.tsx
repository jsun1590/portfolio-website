import React from "react";
import Image from "next/image";
import skillsData from "data/skills.json";
import Heading from "@components/Utils/Heading";

const Skills = () => {
  return (
    <section>
      <Heading content="Technologies" type="h2" />
      <div className="grid grid-cols-6 gap-8 mx-auto justify-items-center align-center">
        {skillsData.map((skill) => (
          <div
            key={skill.src.slice(0, -4)}
            className="transition-transform hover:scale-125"
          >
            <Image
              alt={skill.src.slice(0, -4)}
              src={"/skills/" + skill.src}
              width={skill.width}
              height={skill.height}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
