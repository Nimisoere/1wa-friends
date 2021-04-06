import React from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import AuthHeaderMenu from '../AuthHeaderMenu';
import SearchBar from '../SearchBar';
import Logo from '../common/Logo';

interface Props {}

const Header: React.FC<Props> = () => {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  return (
    <div className="h-20 sticky w-full z-50 top-0 flex items-center shadow-sm bg-white">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div
          id="logo"
          className="h-full flex w-3/12 lg:w-2/12 justify-between items-center"
        >
          <Link className="flex text-xl font-semibold" to="/">
            <Logo size={28} mode="light" />
            <span className="ml-2">Square</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex justify-end lg:hidden w-9/12">
          <FiMenu
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className="text-4xl"
          />
        </div>
        {/* Mobile Toggle */}

        <div
          className={`w-full lg:w-10/12 ${
            !showMenu ? 'hidden' : 'flex'
          } lg:flex flex-wrap h-full items-center`}
        >
          <div className="w-full lg:w-7/12 flex justify-between">
            <SearchBar />
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
