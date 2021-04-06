export interface FRIEND {
  id: number | string;
  backgroundUrl: string;
  avatarUrl: string;
  firstName: string;
  lastName: string;
  userName: string;
  aboutMe: string;
  followers: (string | number)[];
  following: (string | number)[];
  posts: (string | number)[];
}
