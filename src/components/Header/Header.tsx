import React from 'react';
import { Link } from 'react-router-dom';
import RightTopMenu from '../RightTopMenu';
import SearchBar from '../SearchBar';
import Logo from '../common/Logo';

interface Props {}

const Header: React.FC<Props> = () => (
  <div className="h-auto sm:h-20 sticky w-full z-50 top-0 flex items-center shadow-sm bg-white">
    <div className="px-7 w-full flex flex-wrap justify-between items-center mx-auto">
      <div
        id="logo"
        className="h-full flex w-3/12 lg:w-2/12 justify-between items-center"
      >
        <Link className="flex text-xl font-semibold" to="/">
          <Logo size={28} mode="light" />
          <span className="ml-2 font-heading">Square</span>
        </Link>
      </div>

      <div
        className={`w-full lg:w-10/12 ${'flex-row-reverse sm:flex-row'} flex flex-wrap h-full justify-between items-center`}
      >
        <div className="w-full lg:w-5/12 flex justify-between">
          <SearchBar />
        </div>
        <div className="w-full lg:w-5/12 flex">
          <RightTopMenu />
        </div>
      </div>
    </div>
  </div>
);

export default Header;
