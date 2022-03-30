import { RootState } from "store";

export const all = (id: string) => (state: RootState) => state.comments.filter(comment => comment.cardId === id);

export const count = (id: string) => (state: RootState) => state.comments.filter(comment => comment.cardId === id).length;
