import uniqId from 'uniqid'
import { deleteCard, getCardsByColumnId } from '.';
import { columnsStoreKey } from '..'
import { Column } from '../../common/types';

export const getColumns = () => {
  const columnsFromStorage = localStorage.getItem(columnsStoreKey) || '[]';
  const columns = JSON.parse(columnsFromStorage) as Column[];
  return columns;
}

export const getColumnOne = (id: string) => {
  const columns = getColumns();
  const column = columns.find(column => column.id === id);

  if (!column) {
    throw new Error(`Кодонка с id=${id} не найдена`);
  }

  return column;
}

export const createColumn = (name: string) => {
  const columns = getColumns();
  const column: Column = {
    id: uniqId(),
    name
  };

  const newColumns = [...columns, column];
  localStorage.setItem(columnsStoreKey, JSON.stringify(newColumns));
  return column;
}

export const updateColumn = (id: string, name: string) => {
  const columns = getColumns();

  const updateColumn = {} as Column;

  const newColumns = columns.map(column => {
    if (column.id === id) {
      updateColumn.id = column.id;
      updateColumn.name = name;
      return updateColumn;
    }
    return column;
  })

  localStorage.setItem(columnsStoreKey, JSON.stringify(newColumns));
  return updateColumn;
}

export const deleteColumn = (id: string) => {
  const columns = getColumns();
  const cards = getCardsByColumnId(id);
  cards.forEach(card => {
    deleteCard(card.id)
  })

  const columnsAfterDelete = columns.filter(column => column.id !== id);
  localStorage.setItem(columnsStoreKey, JSON.stringify(columnsAfterDelete));
}