import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  addWordError,
  addWordRequest,
  addWordSuccess,
  fetchWordsError,
  fetchWordsRequest,
  fetchWordsSuccess,
} from './actions';

const entities = createReducer([], builder => {
  builder
    .addCase(fetchWordsSuccess, (_, action) => action.payload)
    .addCase(addWordSuccess, (state, { payload }) => state.concat(payload));
});

const isLoading = createReducer(false, builder => {
  builder
    .addCase(fetchWordsRequest, () => true)
    .addCase(fetchWordsSuccess, () => false)
    .addCase(fetchWordsError, () => false)
    .addCase(addWordRequest, () => true)
    .addCase(addWordSuccess, () => false)
    .addCase(addWordError, () => false);
});

const error = createReducer(null, builder => {
  builder
    .addCase(fetchWordsError, (_, action) => action.payload)
    .addCase(fetchWordsRequest, () => null)
    .addCase(addWordError, (_, action) => action.payload)
    .addCase(addWordRequest, () => null);
});

export const wordsReducer = combineReducers({
  entities,
  isLoading,
  error,
});
