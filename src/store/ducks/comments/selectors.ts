import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store";

export const selectAll = (state: RootState) => state.comments;

export const selectByCardId = (id: string) => createSelector(selectAll, comments => comments.filter(comment => comment.cardId === id));

export const selectByCardIdCount = (id: string) => createSelector(selectByCardId(id), cards => cards.length);