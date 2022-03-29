import { configureStore } from '@reduxjs/toolkit';

import { columnsSlice, cardsSlice, commentsSlice, userSlice } from './ducks';

export const store = configureStore({
  reducer: {
    columns: columnsSlice,
    cards: cardsSlice,
    comments: commentsSlice,
    user: userSlice
  },
})

export * from './ducks';

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch