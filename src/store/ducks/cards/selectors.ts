import { RootState } from "store";

export const all = (id: string) => (state: RootState) => state.cards.filter(card => card.columnId === id);