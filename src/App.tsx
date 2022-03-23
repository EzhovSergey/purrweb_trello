import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Normalize } from 'styled-normalize';
import { Column as ColumnType, User } from './common/types';
import { Column, CreateColumn, Header } from './components';
import { useInput } from './hooks';
import { store } from './store';
import { Button, Input, Modal } from './ui';

function App() {
  const [columns, setColumns] = useState<ColumnType[]>([]);
  const [user, setUser] = useState<User>();
  const [isOpen, setIsOpen] = useState(false);
  const { bind, value, clear } = useInput();

  const createUser = () => {
    if (!value) {
      return;
    }
    const user = store.setUser(value);
    setUser(user);
    setIsOpen(false);
    clear();
  }

  const deleteUser = () => {
    store.deleteUser();
    setUser(undefined);
    setIsOpen(true);
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
    const user = store.getUser();
    if (!user) {
      setIsOpen(true);
    }
    setUser(user);
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
      <Normalize />
      <Header user={user} deleteUser={deleteUser} isSignIn={() => setIsOpen(true)} />
      <Body>
        <SColumns>
          {renderColumns()}
          <CreateColumn createColumn={createColumn} />
        </SColumns>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          <SFormAuth>
            <SFormTitle>Введите свое имя</SFormTitle>
            <Input {...bind} />
            <Button isColor={true} onClick={createUser} >Войти</Button>
          </SFormAuth>
        </Modal>
      </Body>
    </>
  );
}

export default App;

const Body = styled.div`
`;

const SColumns = styled.div`
  display: flex;
  margin: 5vh;
`;

const SFormAuth = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 200px;

  > Input {
    width: 60%;
    padding: 0.4em;
  }

  > Button {
    width: 25%;
  }
`;

const SFormTitle = styled.span`
  font-size: 24px;
`;
