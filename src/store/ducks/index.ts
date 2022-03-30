import { combineReducers } from '@reduxjs/toolkit';
import { default as columnsSlice, columnsActions, columnsSelectors } from './columns';
import { default as cardsSlice, cardsActions, cardsSelectors } from './cards';
import { default as commentsSlice, commentsActions, commentsSelectors } from './comments';
import { default as userSlice, userActions, userSelectors } from './user';

const rootReducer = combineReducers({
  columns: columnsSlice,
  cards: cardsSlice,
  comments: commentsSlice,
  user: userSlice
});

export default rootReducer;

export const actions = {
  columns: columnsActions,
  cards: cardsActions,
  comments: commentsActions,
  user: userActions
}

export const selectors = {
  columns: columnsSelectors,
  cards: cardsSelectors,
  comments: commentsSelectors,
  user: userSelectors,
}
