import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import uniqid from 'uniqid';
import { Comment } from '../../../types';
import { deleteCard } from '..';

const initialState: Comment[] = [];

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    createComment: (state, action: PayloadAction<{ body: string, cardId: string, userName: string }>) => {
      state.unshift({
        id: uniqid(),
        body: action.payload.body,
        cardId: action.payload.cardId,
        authorName: action.payload.userName,
      });
    },

    updateComment: (state, action: PayloadAction<{ id: string, body: string }>) => {
      return state.map(comment => {
        if (comment.id === action.payload.id) {
          return {
            ...comment,
            body: action.payload.body
          }
        }
        return comment
      })
    },

    deleteComment: (state, action: PayloadAction<{ id: string }>) => {
      return state.filter(comment => comment.id !== action.payload.id)
    }
  },
  extraReducers: {
    [deleteCard.type]: (state, action: PayloadAction<{ id: string }>) => {
      return state.filter(card => card.cardId !== action.payload.id)
    }
  }
})

export const { createComment, updateComment, deleteComment } = commentsSlice.actions

export default commentsSlice.reducer
