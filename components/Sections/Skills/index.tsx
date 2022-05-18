import React from "react";
import Image from "next/image";
import skillsData from "data/skills.json";
import Heading from "@components/Utils/Heading";
import { useTheme } from "next-themes";

const Skills = () => {
  const { theme, setTheme } = useTheme();
  return (
    <section>
      <Heading content="Technologies" type="h2" />
      <div className="grid grid-cols-3 gap-8 mx-auto sm:grid-cols-4 md:grid-cols-6 justify-items-center align-center">
        {skillsData.map((skill) => (
          <div
            key={skill.src.slice(0, -4)}
            className="transition-transform hover:scale-125"
          >
            <Image
              alt={skill.src.slice(0, -4)}
              src={
                theme === "light" && skill.dark
                  ? "/skills/dark_" + skill.src
                  : "/skills/" + skill.src
              }
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
