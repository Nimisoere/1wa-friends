import React from 'react';
import { Link } from 'react-router-dom';
import RightTopMenu from '../RightTopMenu';
import SearchBar from '../SearchBar';
import Logo from '../common/Logo';
import { useThemeContext } from '../context/ThemeContext/context';

interface Props {}

const Header: React.FC<Props> = () => {
  const { mode } = useThemeContext();
  return (
    <div className="h-auto py-4 lg:py-0 lg:h-20 sticky w-full z-50 top-0 flex items-center shadow-sm dark:bg-gray-900 bg-white">
      <div className="px-7 w-full flex flex-wrap justify-between items-center mx-auto">
        <div
          id="logo"
          className="h-full order-1 lg:order-none flex w-1/2 lg:w-2/12 justify-between items-center"
        >
          <Link className="flex text-xl font-semibold" to="/">
            <Logo size={28} mode={mode.theme} />
            <span className="hidden sm:inline ml-2 dark:text-white font-heading">
              Square
            </span>
          </Link>
        </div>
        <div className="w-full order-3 mt-4 lg:mt-0 lg:order-none lg:w-4/12 flex justify-between">
          <SearchBar />
        </div>
        <div className="w-1/2 order-2 lg:order-none lg:w-6/12 flex">
          <RightTopMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
