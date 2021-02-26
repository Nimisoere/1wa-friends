import React from "react";
import logo from "../../assets/images/logo.png";
import AuthHeaderMenu from "../AuthHeaderMenu";
import TopNav from "../TopNav";
import styles from "./Header.module.scss";

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <div className={styles.header}>
      <div className="container flex justify-between items-center mx-auto">
        <div
          id="logo"
          className="h-full flex w-3/12 justify-between items-center"
        >
          <img src={logo} className="h-12" alt="GIGL" />
        </div>
        <div className="w-9/12 flex items-center">
          <div className="w-7/12 flex justify-between">
            <TopNav />
          </div>
          <div className="w-5/12 flex justify-between">
            <AuthHeaderMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
