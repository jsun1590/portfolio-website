import Link from "next/link";
import React from "react";
interface Props {
  className?: string;
  setButtonCallback: () => void;
  links: Array<{
    label: string;
    href: string;
  }>;
}

const BurgerMenu = (props: Props) => {
  return (
    <div className={props.className}>
      {props.links.map(({ label, href }) => (
        <Link key={label} href={href}>
          <a
            className="block py-4 pl-6 text-3xl text-black border-b-2 border-solid dark:border-b bg-slate-100 dark:text-primary dark:bg-zinc-900"
            onClick={props.setButtonCallback}
          >
            {label}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default BurgerMenu;
