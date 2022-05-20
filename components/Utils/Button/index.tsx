import React from "react";

interface Props {
  content: string;
  type: string;
}

const Button = (props: Props) => {
  return (
    <button className="px-2 py-1 mr-3 border-2 h-9">{props.content}</button>
  );
};

export default Button;
