import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const likesSlice = createSlice({
  name: 'likes',
  initialState: {
    dataLikes: [],
    likedChars: null,
  },
  reducers: {
    addLikes(state, action) {
      state.dataLikes.push(action.payload);
    },
    addChars(state, action) {
      return (state.likedChars = action.payload);
    },
  },
});

const persistConfig = {
  key: 'likes',
  storage,
};

export const likesReducer = persistReducer(persistConfig, likesSlice.reducer);
export const { addLikes, addChars } = likesSlice.actions;

// Selectors
// export const getItemsValue = state => state.items.contacts;
