import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import uniqid from 'uniqid';
import { columnsActions } from '../columns';
import { Card } from 'types';

const initialState: Card[] = [];

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    createCard: (state, action: PayloadAction<{ name: string, columnId: string, userName: string }>) => {
      state.push({
        id: uniqid(),
        name: action.payload.name,
        columnId: action.payload.columnId,
        authorName: action.payload.userName,
      });
    },

    updateCard: (state, action: PayloadAction<{ id: string, name?: string, content?: string }>) => {
      return state.map(card => {
        if (card.id === action.payload.id) {
          return {
            ...card,
            name: action.payload.name || card.name,
            content: action.payload.content ?? card.content
          }
        }
        return card
      })
    },

    deleteCard: (state, action: PayloadAction<{ id: string }>) => {
      return state.filter(card => card.id !== action.payload.id)
    }
  },
  extraReducers: {
    [columnsActions.deleteColumn.type]: (state, action: PayloadAction<{ id: string }>) => {
      return state.filter(card => card.columnId === action.payload.id)
    }
  }
})

export const cardsActions = cardsSlice.actions

export default cardsSlice.reducer
