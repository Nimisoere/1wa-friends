export enum API_KEYS {
  GET_FRIENDS = 'GET_FRIENDS',
}

export type API_LIBRARY = {
  [x in API_KEYS]: {
    url: string;
    options: Partial<Request>;
  };
};
