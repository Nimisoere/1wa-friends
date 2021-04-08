import React from 'react';
import { IoStar } from 'react-icons/io5';
import { PropsFromRedux } from '.';

interface Props extends PropsFromRedux {
  friendId: number;
}

const StarredButton: React.FC<Props> = ({
  removeStar,
  addStar,
  starred,
  friendId,
}) => {
  const handleStarring = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => {
    e.preventDefault();
    if (starred.starred.includes(id)) {
      removeStar(id);
    } else {
      addStar(id);
    }
  };
  const isStarred = starred.starred.includes(friendId);
  return (
    <button
      onClick={(e) => handleStarring(e, friendId)}
      className="p-2 right-2 top-2 absolute rounded-full bg-white dark:bg-gray-800"
      type="button"
      aria-label="star"
    >
      <IoStar
        className={`text-xl  ${
          isStarred ? 'text-yellow-400' : 'text-gray-100 dark:text-white'
        }`}
      />
    </button>
  );
};

export default StarredButton;
