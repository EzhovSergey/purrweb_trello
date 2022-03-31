import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store";

export const selectAll = (state: RootState) => state.cards;

export const selectByColumnId = (id: string) => createSelector(selectAll, cards => cards.filter(card => card.columnId === id));