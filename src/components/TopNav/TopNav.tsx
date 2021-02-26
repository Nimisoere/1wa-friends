import React from "react";
import { Link } from "react-router-dom";
import { NavLinks } from "./Navlinks";

interface Props {}

const TopNav: React.FC<Props> = () => {
  return (
    <nav className="flex flex-wrap justify-between w-full font-serif">
      {NavLinks.map((link) => (
        <Link key={link.id} className="font-medium text-sm" to={link.url}>
          {link.title}
        </Link>
      ))}
    </nav>
  );
};

export default TopNav;
