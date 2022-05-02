import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const likesSlice = createSlice({
  name: 'likes',
  initialState: {
    dataLikes: [],
    dataDislikes: [],
  },
  reducers: {
    addLikes(state, action) {
      state.dataLikes.push(action.payload);
    },
    addDislikes(state, action) {
      state.dataDislikes.push(action.payload);
    },
  },
});

const persistConfig = {
  key: 'likes',
  storage,
};

export const likesReducer = persistReducer(persistConfig, likesSlice.reducer);
export const { addLikes, addDislikes } = likesSlice.actions;

// Selectors
// export const getItemsValue = state => state.items.contacts;
