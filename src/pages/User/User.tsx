import React from 'react';
import { useParams } from 'react-router';
import { PropsFromRedux } from '.';
import UserCard from '../../components/UserCard';
import UserTabs from '../../components/UserTabs';
import { FRIEND } from '../../redux/thunks/interfaces/friends.interface';
import ErrorPage from '../Error/Error';

interface Props extends PropsFromRedux {}

const User: React.FC<Props> = ({ friends, getFriends }) => {
  React.useEffect(() => {
    getFriends();
  }, [getFriends]);

  const params = useParams<{ [x: string]: string }>();

  const selectedFriend: FRIEND = friends?.response?.find(
    (friend: FRIEND) => friend.id.toString() === params?.id
  );

  if (!selectedFriend) {
    return (
      <ErrorPage
        errorClassName="text-4xl"
        error="Friend not found"
        description=""
        showLink={false}
      />
    );
  }

  return (
    <div className="w-full">
      <div className="w-full dark:bg-gray-800 dark:text-gray-50 bg-white">
        <UserCard friend={selectedFriend} />
      </div>
      <UserTabs friend={selectedFriend} />
    </div>
  );
};

export default User;
