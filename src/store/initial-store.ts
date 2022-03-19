import uniqid from 'uniqid';
import { Column, User } from '../common/types';

export const userStoreKey = 'users';
export const columnsStoreKey = 'columns';
export const cardsStoreKey = 'cards';
export const commentsStoreKey = 'comments';

export const initializeStore = () => {
  persistUser()
  persistColumns()
}

const persistUser = () => {
  const isUserPersisted = localStorage.getItem(userStoreKey);
  if (!isUserPersisted) {
    const initialUser = {} as User;
    localStorage.setItem(userStoreKey, JSON.stringify(initialUser));
  }
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
