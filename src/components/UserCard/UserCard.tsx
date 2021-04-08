import { format } from 'date-fns';
import React from 'react';
import { IoPinSharp, IoCalendarOutline } from 'react-icons/io5';
import { PropsFromRedux } from '.';
import { FRIEND } from '../../redux/thunks/interfaces/friends.interface';

interface Props extends PropsFromRedux {
  friend: FRIEND;
}

const UserCard: React.FC<Props> = ({ friend }) => (
  <div>
    <div
      style={{
        backgroundImage: `url(${friend.backgroundUrlLarge})`,
      }}
      className="h-56 bg-gray-200 bg-cover w-full"
    />
    <div className="container mx-auto">
      <div className="flex flex-wrap sm:flex-nowrap items-start">
        <div className=" w-20 sm:w-44 -mt-10 h-20 sm:h-44 flex items-start flex-shrink-0">
          <img
            className="rounded-full border-4 border-white w-full h-full"
            src={friend.avatarUrl}
            alt="Name"
          />
        </div>
        <div className="flex-grow ml-5 mt-4">
          <div className="flex flex-wrap items-center mb-2">
            <div className="flex-grow">
              <h4 className="font-semibold font-heading text-3xl mb-2 leading-7">
                {friend.firstName} {friend.lastName}
              </h4>
              <p className="text-gray-400">@{friend.userName}</p>
            </div>
            <div className="text-left sm:text-right">
              <p className=" mb-4">
                <span className="font-semibold text-xl">
                  {friend.following.length}
                </span>{' '}
                Following{' '}
                <span className="font-semibold text-xl">
                  {friend.followers?.length}
                </span>{' '}
                Followers
              </p>
              <button
                type="button"
                aria-label="Follow Joohn Doe"
                className="bg-primary py-2 px-8 rounded-xl font-semibold text-sm text-white"
              >
                Following
              </button>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-6 mb-4">
            <span className="flex items-center">
              <IoPinSharp className="mr-2" /> {friend.location}
            </span>
            <span className="flex items-center">
              <IoCalendarOutline className="mr-2" /> Born{' '}
              {format(new Date(friend.dateOfBirth), 'MMMM dd')}
            </span>
          </div>
          <p className="mb-4">{friend.aboutMe}</p>
        </div>
      </div>
    </div>
  </div>
);

export default UserCard;
