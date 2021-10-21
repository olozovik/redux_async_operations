import {
  addWordError,
  addWordRequest,
  addWordSuccess,
  fetchWordsError,
  fetchWordsRequest,
  fetchWordsSuccess,
} from './actions';
import { addWord, getWords } from './fetch';

//operations - асинхронные action creator

export const fetchWords = () => async dispatch => {
  dispatch(fetchWordsRequest());

  try {
    const words = await getWords();
    dispatch(fetchWordsSuccess(words));
  } catch (error) {
    dispatch(fetchWordsError(error));
  }
};

export const addNewWord = newWord => async dispatch => {
  dispatch(addWordRequest());

  try {
    const request = await addWord(newWord);
    dispatch(addWordSuccess(request));
    fetchWords();
  } catch (error) {
    dispatch(addWordError(error));
  }
};
