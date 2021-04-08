import React from 'react';
import { IoPinSharp, IoCalendarOutline } from 'react-icons/io5';

interface Props {}

const UserCard: React.FC<Props> = () => (
  <div>
    <div
      style={{
        backgroundImage: `url('https://picsum.photos/id/10/1600/224')`,
      }}
      className="h-56 bg-gray-200 bg-cover w-full"
    />
    <div className="container mx-auto">
      <div className="flex flex-wrap sm:flex-nowrap items-start">
        <div className=" w-20 sm:w-44 -mt-10 h-20 sm:h-44 flex items-start flex-shrink-0">
          <img
            className="rounded-full border-4 border-white w-full h-full"
            src="https://i.pravatar.cc/150?img=1"
            alt="Name"
          />
        </div>
        <div className="flex-grow ml-5 mt-4">
          <div className="flex flex-wrap items-center mb-2">
            <div className="flex-grow">
              <h4 className="font-semibold font-heading text-3xl mb-2 leading-7">
                Mayke Schurrs
              </h4>
              <p className="text-gray-400">@maykeshurrs</p>
            </div>
            <div className="text-left sm:text-right">
              <p className=" mb-4">
                <span className="font-semibold text-xl">326</span> Following{' '}
                <span className="font-semibold text-xl">405</span> Followers
              </p>
              <button
                type="button"
                className="bg-primary py-2 px-8 rounded-xl font-semibold text-sm text-white"
              >
                Following
              </button>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-6 mb-4">
            <span className="flex items-center">
              <IoPinSharp className="mr-2" /> Lagos, Nigeria
            </span>
            <span className="flex items-center">
              <IoCalendarOutline className="mr-2" /> Born September 24
            </span>
          </div>
          <p className="mb-4">Not a Man but a Ghost 👻</p>
        </div>
      </div>
    </div>
  </div>
);

export default UserCard;
