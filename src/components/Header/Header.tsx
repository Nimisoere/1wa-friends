import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import AuthHeaderMenu from "../AuthHeaderMenu";
import TopNav from "../TopNav";
import styles from "./Header.module.scss";
import { IoIosMenu } from "react-icons/io";

interface Props {}

const Header: React.FC<Props> = () => {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  return (
    <div className={styles.header}>
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div
          id="logo"
          className="h-full flex w-3/12 lg:w-2/12 justify-between items-center"
        >
          <Link to="/">
            <img src={logo} className="h-12" alt="GIGL" />
          </Link>
        </div>
        <div className="flex justify-end lg:hidden w-9/12">
          <IoIosMenu
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className="text-4xl"
          />
        </div>
        <div
          className={`w-full lg:w-10/12 ${
            !showMenu ? "hidden" : "flex"
          } lg:flex flex-wrap h-full items-center`}
        >
          <div className="w-full lg:w-7/12 flex justify-between">
            <TopNav />
          </div>
          <div className="w-full lg:w-5/12 flex justify-between">
            <AuthHeaderMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
