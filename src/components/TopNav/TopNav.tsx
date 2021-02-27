import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavLinks } from "./Navlinks";
import style from "./TopNav.module.scss";

interface Props {}

const TopNav: React.FC<Props> = () => {
  return (
    <nav className="flex flex-wrap justify-between w-full font-serif">
      {NavLinks.map((link) => (
        <div
          key={link.id}
          className={`font-medium text-sm relative ${
            link.hasSubmenu && style.hasSubmenu
          }`}
        >
          <Link
            className="hover:text-primary"
            to={{ pathname: link.url }}
            target={link.external ? "_blank" : "_self"}
          >
            {link.title}
            {link.hasSubmenu && <FaCaretDown className="inline-flex ml-2" />}
          </Link>
          {link.submenu && (
            <div
              className={`absolute py-3 flex-col shadow rounded-lg w-52 bg-white ${style.subMenu}`}
            >
              {link.submenu.map((menu) => (
                <Link
                  className="px-6 py-3 w-full flex hover:text-primary"
                  key={menu.id}
                  to={menu.url}
                >
                  {menu.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default TopNav;
