import React from 'react';
import { FiSearch, FiFilter } from 'react-icons/fi';
import Dropdown from '../common/Dropdown';

interface Props {}

const FriendsFilter: React.FC<Props> = (props: Props) => {
  const [showSearch, setShowSearch] = React.useState<boolean>(false);
  return (
    <div className="flex flex-wrap justify-between gap-4">
      <div className="w-full sm:w-auto dark:bg-gray-800 bg-white rounded-xl flex justify-end items-center">
        <label
          className={`${showSearch ? 'sm:block' : 'sm:hidden'} block flex-grow`}
          htmlFor="searchfriends"
        >
          <span className="hidden" aria-hidden="false">
            Search
          </span>
          <input
            className="dark:bg-gray-800 dark:text-gray-50 px-2 flex-grow"
            type="search"
            placeholder="Search"
            name="searchfriends"
            id="searchfriends"
          />
        </label>

        <button
          onClick={() => setShowSearch(!showSearch)}
          className="dark:bg-gray-800 bg-white p-2 rounded-xl text-gray-400"
          type="button"
          aria-label="Search"
        >
          <FiSearch className="text-lg" />
        </button>
      </div>
      <div className="relative">
        <label htmlFor="sort">
          <span className="hidden" aria-hidden="false">
            Sort
          </span>
          <select
            placeholder="Sort by:"
            name="sort"
            id="sort"
            className="dark:bg-gray-800 dark:text-gray-50 bg-white p-2 rounded-xl text-gray-400"
          >
            <option value="newest">Sort by: Newest first</option>
            <option value="oldest">Sort by: Oldest first</option>
          </select>
        </label>
      </div>
      <Dropdown
        hideCaret
        buttonClassName="dark:bg-gray-800 bg-white p-2 rounded-xl text-gray-400"
        toggleContent={() => (
          <FiFilter style={{ transform: 'scale(-1, 1)' }} className="text-lg" />
        )}
      >
        <div className="dark:bg-gray-800 dark:text-gray-50 bg-white shadow-md p-4">
          Notification
        </div>
      </Dropdown>
    </div>
  );
};

export default FriendsFilter;
