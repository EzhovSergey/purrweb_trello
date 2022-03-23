export type Column = {
  id: string;
  name: string;
}

export type Card = {
  id: string;
  columnId: string;
  name: string;
  authorName: string;
  content?: string;
}

export type Comment = {
  id: string;
  cardId: string;
  body: string;
  authorName: string;
}

export type User = {
  id: string;
  name: string;
}
