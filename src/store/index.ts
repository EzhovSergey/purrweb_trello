import { initializeStore } from './initial-store';
export * as store from './moduls';
export { columnsStoreKey, cardsStoreKey, commentsStoreKey, userStoreKey } from './initial-store';

initializeStore()