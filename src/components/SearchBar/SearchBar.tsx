import React from 'react';
import { FiSearch } from 'react-icons/fi';

interface Props {}

const SearchBar: React.FC<Props> = () => (
  <div className="flex w-full rounded-2xl px-4 border items-center dark:border-gray-800 dark:bg-gray-800 bg-gray-50 border-gray-200">
    <label
      className="flex-grow rounded-2xl  bg-gray-50 dark:bg-gray-800"
      htmlFor="search"
    >
      <span className="hidden" aria-hidden="false">
        Search
      </span>
      <input
        type="search"
        className="text-sm p-2 w-full flex-grow dark:bg-gray-800 dark:text-gray-50 bg-gray-50"
        placeholder="search"
        name="search"
        id="search"
      />
    </label>

    <FiSearch className="text-xl text-gray-500" />
  </div>
);

export default SearchBar;
