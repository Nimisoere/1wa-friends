import React from "react";
import logo from "../../assets/images/logo.png";
import styles from "./Header.module.scss";

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <div className={styles.header}>
      <div className="container flex justify-between items-center mx-auto">
        <div id="logo" className="h-full flex justify-between items-center">
          <img src={logo} className="h-12" alt="GIGL" />
        </div>
      </div>
    </div>
  );
};

export default Header;
