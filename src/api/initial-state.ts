import uniqid from 'uniqid';
import { Column, User } from '../common/types';

export const userStateKey = 'users'
export const columnsStateKey = 'columns'

export const initializeState = () => {
  persistUser()
  persistColumns()
}

const persistUser = () => {
  const users: User[] = []

  const isUserPersisted = localStorage.getItem(userStateKey)
  if (!isUserPersisted) {
    localStorage.setItem(userStateKey, JSON.stringify(users))
  }
}

const persistColumns = () => {
  const columns: Column[] = [
    {
      id: uniqid(),
      name: 'TODO',
      cards: [],
    },
    {
      id: uniqid(),
      name: 'In progress',
      cards: [],
    },
    {
      id: uniqid(),
      name: 'Testing',
      cards: [],
    },
    {
      id: uniqid(),
      name: 'Done',
      cards: [],
    }
  ]

  const isColumnsPersisted = localStorage.getItem(columnsStateKey)
  if (!isColumnsPersisted) {
    localStorage.setItem(columnsStateKey, JSON.stringify(columns))
  }
}
