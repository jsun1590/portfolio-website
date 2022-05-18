import React from "react";

interface Props {
  content: string;
  type: "h1" | "h2" | "h3" | "h4";
}

const Heading = (props: Props) => {
  const common = " mb-10";
  const headings = {
    h1: (
      <h1 className={"text-center sm:text-8xl lg:text-9xl text-6xl"}>
        {props.content}
      </h1>
    ),
    h2: (
      <h2
        className={
          "sm:text-5xl lg:text-6xl text-4xl underline decoration-sky-500" +
          common
        }
      >
        {props.content}
      </h2>
    ),
    h3: <h3 className={"text-4xl" + common}>{props.content}</h3>,
    h4: <h4 className={"text-2xl" + common}>{props.content}</h4>,
  };

  return headings[props.type];
};

export default Heading;
