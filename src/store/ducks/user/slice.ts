import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import uniqid from 'uniqid';
import { User } from '../../../types';

const initialState = {} as User;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser: (state, action: PayloadAction<{ name: string }>) => {
      return {
        id: uniqid(),
        name: action.payload.name
      };
    },

    deleteUser: (state) => {
      return {} as User;
    }
  },
})

export const { createUser, deleteUser } = userSlice.actions

export default userSlice.reducer
