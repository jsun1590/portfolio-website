import React from "react";

interface Props {
  text: string;
  href: string;
}
const Anchor = (props: Props) => {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noreferrer"
      className="underline decoration-sky-500 hover:decoration-sky-700 text-sky-500 hover:text-sky-700"
    >
      {props.text}
    </a>
  );
};

export default Anchor;
