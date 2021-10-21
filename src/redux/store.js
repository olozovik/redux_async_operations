import { configureStore } from '@reduxjs/toolkit';
import { wordsReducer } from './reducers';

export const store = configureStore({
  reducer: {
    words: wordsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
