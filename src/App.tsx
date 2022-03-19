import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Column as ColumnType } from './common/types';
import { Column, CreateColumn } from './components';
import { useInput } from './hooks';
import { getColumns } from './store';
import { Button, Input, Modal } from './ui';

function App() {
  const [columns, setColumns] = useState<ColumnType[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const { bind, value, clear } = useInput();

  const createUser = () => {
    if (!!!value) {

      return;
    }


    setIsOpen(false);
    clear();
  }


  const fetchColumns = () => {
    const columnsBuStore = getColumns();
    setColumns(columnsBuStore);
  }

  const fetchUser = () => {
    setIsOpen(true);
  }

  useEffect(() => {
    fetchColumns();
    fetchUser();
  }, [])

  return (
    <>
      <Columns>
        {columns.map(column =>
          <Column
            key={column.id}
            column={column}
          />
        )}
      </Columns>
      <CreateColumn />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <h1>Введите свое имя</h1>
        <Input {...bind} />
        <Button onClick={createUser} >Войти</Button>
      </Modal>
    </>
  );
}

export default App;

const Columns = styled.div``;
