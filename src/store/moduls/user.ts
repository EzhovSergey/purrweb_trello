import uniqId from 'uniqid';
import { userStoreKey } from "..";
import { User } from "../../common/types";

export const getUser = () => {
  const userFromStorage = localStorage.getItem(userStoreKey);

  if (!userFromStorage) {
    return
  }

  const user = JSON.parse(userFromStorage) as User;
  return user;
}

export const setUser = (name: string) => {
  const user: User = {
    id: uniqId(),
    name
  };

  localStorage.setItem(userStoreKey, JSON.stringify(user));

  return user;
}

export const deleteUser = () => {
  localStorage.removeItem(userStoreKey);
}
