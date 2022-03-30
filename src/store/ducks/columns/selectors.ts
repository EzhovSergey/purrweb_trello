import { RootState } from "store";

export const all = (state: RootState) => state.columns;

export const name = (id: string) => (state: RootState) => state.columns.find(column => column.id === id)?.name
