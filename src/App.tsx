import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Column as ColumnType } from './common/types';
import { Column, CreateColumn } from './components';
import { useInput } from './hooks';
import { store } from './store';
import { Button, Input, Modal } from './ui';

function App() {
  const [columns, setColumns] = useState<ColumnType[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const { bind, value, clear } = useInput();

  const createUser = () => {
    if (!value) {
      return;
    }
    store.setUser(value);

    setIsOpen(false);
    clear();
  }

  const createColumn = (name: string) => {
    const newColumn = store.createColumn(name);
    setColumns(columns => [...columns, newColumn]);
  }

  const updateColumn = (id: string, name: string) => {
    const newColumn = store.updateColumn(id, name);
    setColumns(columns => columns.map(column =>
      column.id === id
        ? newColumn
        : column
    ));
  }

  const deleteColumn = (id: string) => {
    store.deleteColumn(id);
    setColumns(columns => columns.filter(column => column.id !== id));
  }

  const fetchColumns = () => {
    const columnsBuStore = store.getColumns();
    setColumns(columnsBuStore);
  }

  const fetchUser = () => {
    if (!store.getUser()) {
      setIsOpen(true)
    }
  }

  useEffect(() => {
    fetchColumns();
    fetchUser();
  }, [])

  const renderColumns = () => {
    if (!columns) {
      return <></>
    }

    return columns.map(column =>
      <Column
        key={column.id}
        column={column}
        updateColumn={updateColumn}
        deleteColumn={deleteColumn}
      />
    )
  }

  return (
    <>
      <Columns>
        {renderColumns()}
      </Columns>
      <CreateColumn createColumn={createColumn} />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <h1>Введите свое имя</h1>
        <Button onClick={() => setIsOpen(false)}>&#10006;</Button>
        <Input {...bind} />
        <Button onClick={createUser} >Войти</Button>
      </Modal>
    </>
  );
}

export default App;

const Columns = styled.div``;
