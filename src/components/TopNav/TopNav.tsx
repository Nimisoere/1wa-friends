import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavLinks } from "./Navlinks";
import style from "./TopNav.module.scss";

interface Props {}

const TopNav: React.FC<Props> = () => (
    <nav className="flex flex-wrap justify-between w-full font-serif">
      {NavLinks.map((link) => (
        <div
          key={link.id}
          className={`font-medium text-sm relative flex flex-wrap lg:block w-full lg:w-auto ${
            link.hasSubmenu ? style.hasSubmenu : ""
          }`}
        >
          <Link
            className="hover:text-primary flex justify-between py-4 w-full lg:py-0"
            to={{ pathname: link.url }}
            target={link.external ? "_blank" : "_self"}
          >
            {link.title}
            {link.hasSubmenu && <FaCaretDown className="inline-flex ml-2" />}
          </Link>
          {link.submenu && (
            <div
              className={`relative lg:absolute lg:py-3 flex-col lg:shadow lg:rounded-lg w-full lg:w-52 bg-gray-100 lg:bg-white ${style.subMenu}`}
            >
              {link.submenu.map((menu) => (
                <Link
                  className="px-3 border-b border-gray-200 lg:border-none lg:px-6 py-3 w-full flex hover:text-primary"
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

export default TopNav;
