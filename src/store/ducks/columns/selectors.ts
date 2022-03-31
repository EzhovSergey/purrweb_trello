import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store";

export const selectAll = (state: RootState) => state.columns;

export const selectName = (id: string) => createSelector(selectAll, (columns) => columns.find(column => column.id === id)?.name)
