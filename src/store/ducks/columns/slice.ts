import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import uniqid from 'uniqid';
import { Column } from 'types';

const initialState: Column[] = [
  {
    id: uniqid(),
    name: 'TODO',
  },
  {
    id: uniqid(),
    name: 'In progress',
  },
  {
    id: uniqid(),
    name: 'Testing',
  },
  {
    id: uniqid(),
    name: 'Done',
  }
]

const columnsSlice = createSlice({
  name: 'columns',
  initialState,
  reducers: {
    createColumn: (state, action: PayloadAction<{ name: string }>) => {
      state.push({
        id: uniqid(),
        name: action.payload.name
      });
    },

    updateColumn: (state, action: PayloadAction<{ id: string, name: string }>) => {
      return state.map(column => {
        if (column.id === action.payload.id) {
          return {
            ...column,
            name: action.payload.name
          }
        }
        return column
      })
    },

    deleteColumn: (state, action: PayloadAction<{ id: string }>) => {
      return state.filter(column => column.id !== action.payload.id)
    },
  },
})

export const columnsActions = columnsSlice.actions

export default columnsSlice.reducer
