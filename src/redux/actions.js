import { createAction } from '@reduxjs/toolkit';

//actions - синхронные экшены, которые дойдут до редьюсера

export const fetchWordsRequest = createAction('words/fetchWordsRequest');
export const fetchWordsSuccess = createAction('words/fetchWordsSuccess');
export const fetchWordsError = createAction('words/fetchWordsError');

export const addWordRequest = createAction('words/addWordRequest');
export const addWordSuccess = createAction('words/addWordSuccess');
export const addWordError = createAction('words/addWordError');
