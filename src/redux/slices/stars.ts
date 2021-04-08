import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StarredState } from '../../interfaces';
import { initialStarred } from '../../interfaces/initialStates';

const starredFriends = createSlice({
  name: 'starred',
  initialState: initialStarred,
  reducers: {
    addStar(state: StarredState, action: PayloadAction<number>) {
      state.starred = [...state.starred, action.payload];
    },
    removeStar(state: StarredState, action: PayloadAction<number>) {
      state.starred = state.starred.filter((id) => action.payload !== id);
    },
  },
});

export const { addStar, removeStar } = starredFriends.actions;

export default starredFriends.reducer;
