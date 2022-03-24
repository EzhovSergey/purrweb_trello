import uniqid from 'uniqid';
import { Column } from '../types';

export const userStoreKey = 'user';
export const columnsStoreKey = 'columns';
export const cardsStoreKey = 'cards';
export const commentsStoreKey = 'comments';

export const initializeStore = () => {
  persistColumns();
}

const persistColumns = () => {
  const isColumnsPersisted = localStorage.getItem(columnsStoreKey)
  if (!isColumnsPersisted) {
    const initialColumns: Column[] = [
      {
        id: uniqid(),
        name: 'TODO',
      },
      {
        id: uniqid(),
        name: 'In progress',
      },
      {
        id: uniqid(),
        name: 'Testing',
      },
      {
        id: uniqid(),
        name: 'Done',
      }
    ]

    localStorage.setItem(columnsStoreKey, JSON.stringify(initialColumns))
  }
}
