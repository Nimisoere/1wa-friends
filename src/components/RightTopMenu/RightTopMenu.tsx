import React from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { IoChatbubbleEllipsesOutline, IoGlobeOutline } from 'react-icons/io5';
import { HiOutlineUserAdd } from 'react-icons/hi';
import Dropdown from '../common/Dropdown';

interface Props {}

const RightTopMenu: React.FC<Props> = () => (
  <nav className="flex items-center justify-end w-full">
    <Dropdown
      hideCaret
      toggleContent={() => (
        <span className="flex items-center text-gray-400">
          <IoGlobeOutline className="text-2xl" />
          <span className="text-xs ml-1 hidden sm:inline">EN-GB</span>
        </span>
      )}
    >
      <div className="bg-white shadow-md p-4">German (de-DE)</div>
    </Dropdown>
    <Dropdown
      hideCaret
      toggleContent={() => (
        <HiOutlineUserAdd
          title="Add Friend"
          className="text-2xl text-gray-400"
        />
      )}
    >
      <div className="bg-white shadow-md p-4">Suggested Friends</div>
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
      <div className="bg-white shadow-md p-4">Messages</div>
    </Dropdown>
    <Dropdown
      hideCaret
      toggleContent={() => (
        <IoMdNotificationsOutline className="text-2xl text-gray-400" />
      )}
    >
      <div className="bg-white shadow-md p-4">2 Unread Notifications</div>
    </Dropdown>
    <Dropdown
      toggleContent={() => (
        <img
          src="https://i.pravatar.cc/28?u=2"
          alt="User"
          className="text-2xl rounded-full w-full h-full text-gray-400"
        />
      )}
    >
      <div className="bg-white shadow-md p-4">
        Log Out IoCloudyNight WiDayCloudy
      </div>
    </Dropdown>
  </nav>
);

export default RightTopMenu;
