import React from 'react';
import { FiSearch } from 'react-icons/fi';

interface Props {}

const SearchBar: React.FC<Props> = () => (
  <div className="flex w-full rounded-2xl px-4 border items-center bg-gray-50 border-gray-200">
    <input
      type="search"
      placeholder="search"
      name="search"
      id="search"
      className="flex-grow rounded-2xl p-2 bg-gray-50"
    />
    <FiSearch className="text-gray-500" />
  </div>
);

export default SearchBar;
