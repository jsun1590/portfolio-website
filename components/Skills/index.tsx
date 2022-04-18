import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="grid grid-cols-3 gap-2 justify-items-center align-center">
      <div>
        <Image src={"/skills/python.png"} width={200} height={200}></Image>
      </div>
      <div>
        <Image src={"/skills/html.png"} width={200} height={200}></Image>
      </div>
      <div>
        <Image src={"/skills/css.png"} width={200} height={200}></Image>
      </div>
      <div>
        <Image src={"/skills/javascript.png"} width={200} height={200}></Image>
      </div>
      <div>
        <Image src={"/skills/typescript.png"} width={200} height={200}></Image>
      </div>
      <div>
        <Image src={"/skills/react.png"} width={200} height={200}></Image>
      </div>
      <div>
        <Image src={"/skills/tailwind.png"} width={200} height={200}></Image>
      </div>
      <div>
        <Image src={"/skills/git.png"} width={200} height={200}></Image>
      </div>
    </div>
  );
};

export default Skills;
