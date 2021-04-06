import React from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { HiOutlineUserAdd } from 'react-icons/hi';
import Dropdown from '../common/Dropdown';

interface Props {}

const RightTopMenu: React.FC<Props> = () => (
  <nav className="flex items-center justify-end w-full font-serif">
    <Dropdown
      hideCaret
      toggleContent={() => (
        <HiOutlineUserAdd className="text-2xl text-gray-400" />
      )}
    >
      <div className="bg-white shadow-md p-4">Notification</div>
    </Dropdown>
    <Dropdown
      hideCaret
      toggleContent={() => (
        <IoChatbubbleEllipsesOutline
          style={{ transform: 'scale(-1, 1)' }}
          className="text-2xl transform text-gray-400"
        />
      )}
    >
      <div className="bg-white shadow-md p-4">Notification</div>
    </Dropdown>
    <Dropdown
      hideCaret
      toggleContent={() => (
        <IoMdNotificationsOutline className="text-2xl text-gray-400" />
      )}
    >
      <div className="bg-white shadow-md p-4">Notification</div>
    </Dropdown>
    <Dropdown
      toggleContent={() => (
        <img
          src="https://i.pravatar.cc/34"
          alt="User"
          className="text-2xl rounded-full w-full h-full text-gray-400"
        />
      )}
    >
      <div className="bg-white shadow-md p-4">Notification</div>
    </Dropdown>
  </nav>
);

export default RightTopMenu;
