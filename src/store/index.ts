import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { columnsSlice, cardsSlice, commentsSlice, userSlice } from './ducks';

const rootReducer = combineReducers({
  columns: columnsSlice,
  cards: cardsSlice,
  comments: commentsSlice,
  user: userSlice
});

const persistConfig = {
  key: 'root',
  storage,
}

const reducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);
export default store;

export * from './ducks';

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch