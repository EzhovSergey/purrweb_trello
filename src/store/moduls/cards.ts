import uniqId from 'uniqid';
import { getUser, deleteComment, getCommentsByCardId } from '.';
import { cardsStoreKey } from '..'
import { Card } from '../../common/types';

export const getCards = () => {
  const cardsFromStorage = localStorage.getItem(cardsStoreKey) || '[]';
  const cards = JSON.parse(cardsFromStorage) as Card[];
  return cards;
}

export const getCardsByColumnId = (columnId: string) => {
  const cards = getCards();
  const cardsByColumnId = cards.filter(card => card.columnId === columnId);
  return cardsByColumnId;
}

export const createCard = (
  columnId: string,
  name: string
) => {
  const cards = getCards();
  const user = getUser();

  if (!user) {
    throw new Error('Пользователь не авторизирован')
  }

  const card: Card = {
    id: uniqId(),
    name,
    columnId,
    authorName: user.name,
  };

  const newCards = [...cards, card];
  localStorage.setItem(cardsStoreKey, JSON.stringify(newCards));
  return card;
}

export const updateCard = (id: string, name?: string, content?: string) => {
  const cards = getCards();

  let updateCard = {} as Card;

  const newCards = cards.map(card => {
    if (card.id === id) {
      updateCard = {
        ...card,
        name: name || card.name,
      }
      if (content === '') {
        updateCard.content = ''
      } else {
        updateCard.content = content || card.content
      }
      return updateCard;
    }
    return card;
  })

  localStorage.setItem(cardsStoreKey, JSON.stringify(newCards));
  return updateCard;
}

export const deleteCard = (id: string) => {
  const cards = getCards();
  const comments = getCommentsByCardId(id);
  comments.forEach(comment => {
    deleteComment(comment.id)
  })

  const cardsAfterDelete = cards.filter(card => card.id !== id);
  localStorage.setItem(cardsStoreKey, JSON.stringify(cardsAfterDelete));
}
