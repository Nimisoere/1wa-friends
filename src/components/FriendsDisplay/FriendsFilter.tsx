import React from 'react';
import { FiSearch, FiFilter } from 'react-icons/fi';
import { IoMdArrowDropdown } from 'react-icons/io';
import Select from 'react-select';
import Dropdown from '../common/Dropdown';

interface Props {}

const FriendsFilter: React.FC<Props> = (props: Props) => {
  const [showSearch, setShowSearch] = React.useState<boolean>(false);
  return (
    <div className="flex flex-wrap justify-between gap-4">
      <div className="w-full sm:w-auto bg-white rounded-xl flex justify-end items-center">
        <input
          className={`${showSearch ? 'block' : 'hidden'} flex-grow px-2`}
          type="search"
        />
        <button
          onClick={() => setShowSearch(!showSearch)}
          className="bg-white p-2 rounded-xl text-gray-400"
          type="button"
        >
          <FiSearch className="text-lg" />
        </button>
      </div>
      <div>
        <Select
          styles={{
            control: (base) => ({
              ...base,
              border: 'none',
              minWidth: 200,
              borderRadius: 10,
            }),
            indicatorSeparator: (base) => ({
              ...base,
              margin: 0,
              backgroundColor: '#F1F1F5',
            }),
          }}
          components={{
            DropdownIndicator: () => (
              <IoMdArrowDropdown className="text-2xl text-gray-400" />
            ),
          }}
          placeholder="Sort by"
          className="p-0"
          options={[{ value: 'newest first', label: 'Sort by: Newest first' }]}
        />
      </div>
      <Dropdown
        hideCaret
        buttonClassName="bg-white p-2 rounded-xl text-gray-400"
        toggleContent={() => (
          <FiFilter style={{ transform: 'scale(-1, 1)' }} className="text-lg" />
        )}
      >
        <div className="bg-white shadow-md p-4">Notification</div>
      </Dropdown>
    </div>
  );
};

export default FriendsFilter;
