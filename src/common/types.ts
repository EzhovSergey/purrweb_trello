export type Column = {
  id: string;
  name: string;
}

export type Card = {
  id: string;
  columnId: string;
  name: string;
  authorId: string;
  content?: string;
}

export type Comment = {
  id: string;
  cardId: string;
  body: string;
  authorId: string;
}

export type User = {
  id: string;
  name: string;
}
