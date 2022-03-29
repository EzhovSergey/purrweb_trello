import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import uniqid from 'uniqid';
import { Card } from '../../../types';
import { deleteColumn } from '..';

const initialState: Card[] = [];

export const cardsSlice = createSlice({
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
    [deleteColumn.type]: (state, action: PayloadAction<{ id: string }>) => {
      return state.filter(card => card.columnId === action.payload.id)
    }
  }
})

export const { createCard, updateCard, deleteCard } = cardsSlice.actions

export default cardsSlice.reducer
