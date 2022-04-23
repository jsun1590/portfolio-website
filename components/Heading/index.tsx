import React from "react";

interface Props {
  content: string;
  type: "h1" | "h2" | "h3" | "h4";
}

const Heading = (props: Props) => {
  const common = " text-white mb-10";
  const headings = {
    h1: <h1 className={"mb-10 text-center text-9xl"}>{props.content}</h1>,
    h2: (
      <h2 className={"mb-10 text-6xl underline decoration-sky-500" + common}>
        {props.content}
      </h2>
    ),
    h3: <h3 className={"text-4xl" + common}>{props.content}</h3>,
    h4: <h4 className={"text-2xl" + common}>{props.content}</h4>,
  };

  return headings[props.type];
};

export default Heading;
