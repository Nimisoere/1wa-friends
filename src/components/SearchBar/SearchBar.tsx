import React from 'react';
import { FiSearch } from 'react-icons/fi';

interface Props {}

const SearchBar: React.FC<Props> = () => (
  <div className="flex w-full rounded-2xl border p-2 items-center bg-gray-100 border-gray-300">
    <input
      type="search"
      placeholder="search"
      name="search"
      id="search"
      className="flex-grow rounded-2xl"
    />
    <FiSearch />
  </div>
);

export default SearchBar;
