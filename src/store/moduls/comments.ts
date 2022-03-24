import uniqId from 'uniqid';
import { getUser } from '.';
import { commentsStoreKey } from '..';
import { Comment } from '../../types';

export const getComments = () => {
  const commentsFromStorage = localStorage.getItem(commentsStoreKey) || '[]';
  const comments = JSON.parse(commentsFromStorage) as Comment[];
  return comments;
}

export const getCommentsByCardId = (cardId: string) => {
  const comments = getComments();
  const commentsByCardId = comments.filter(comment => comment.cardId === cardId);
  return commentsByCardId;
}

export const getCommentsCount = (cardId: string) => {
  const comments = getCommentsByCardId(cardId);
  return comments.length
}

export const createComment = (
  cardId: string,
  body: string
) => {
  const comments = getComments();
  const user = getUser();

  if (!user) {
    throw new Error('Пользователь не авторизован')
  }

  const comment: Comment = {
    id: uniqId(),
    body,
    cardId,
    authorName: user.name,
  };

  const newComments = [comment, ...comments];
  localStorage.setItem(commentsStoreKey, JSON.stringify(newComments));
  return comment;
}

export const updateComment = (id: string, body: string) => {
  const comments = getComments();

  let updateComment = {} as Comment;

  const newComments = comments.map(comment => {
    if (comment.id === id) {
      updateComment = {
        ...comment,
        body,
      }
      return updateComment;
    }
    return comment;
  })

  localStorage.setItem(commentsStoreKey, JSON.stringify(newComments));
  return updateComment;
}

export const deleteComment = (id: string) => {
  const comments = getComments();
  const commentsAfterDelete = comments.filter(comment => comment.id !== id);
  localStorage.setItem(commentsStoreKey, JSON.stringify(commentsAfterDelete));
}
