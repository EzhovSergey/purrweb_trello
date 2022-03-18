import { Card, Column, Comment } from "../common/types";
import { columnsStoreKey, cardsStoreKey, commentsStoreKey, usersStoreKey, initializeStore } from './initial-store'

initializeStore()

export const getColumns = () => {
  const columnsFromStorage = localStorage.getItem(columnsStoreKey) || '[]';
  const columns = JSON.parse(columnsFromStorage) as Column[];
  return columns;
}

export const getCardsByColumnId = (columnId: string) => {
  const cardsFromStorage = localStorage.getItem(cardsStoreKey) || '[]';
  const cards = JSON.parse(cardsFromStorage) as Card[];
  const cardsByColumnId = cards.filter(card => card.columnId === columnId);
  return cardsByColumnId;
}

export const getCommentsByCardId = (cardId: string) => {
  const commentsFromStorage = localStorage.getItem(commentsStoreKey) || '[]';
  const comments = JSON.parse(commentsFromStorage) as Comment[];
  const commentsByCardId = comments.filter(comment => comment.cardId === cardId);
  return commentsByCardId;
}
