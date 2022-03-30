import React, { useState } from 'react';
import styled from 'styled-components';
import { Normalize } from 'styled-normalize';
import { Form, Field } from 'react-final-form';
import { Column, CreateColumn, Header } from './components';
import { createUser } from './store';
import { Button, Input, Modal } from './ui';
import { useAppDispatch, useAppSelector } from './hooks';

function App() {
  const columns = useAppSelector(state => state.columns);
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = (values: { name: string }) => {
    dispatch(createUser({ name: values.name }));
    setIsOpen(false);
  }

  const renderColumns = () => {
    if (!columns) {
      return <></>
    }

    return columns.map(column =>
      <Column
        key={column.id}
        column={column}
      />
    )
  }

  return (
    <>
      <Normalize />
      <Header setIsOpen={setIsOpen} />
      <Body>
        <SColumns>
          {renderColumns()}
          <CreateColumn />
        </SColumns>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, pristine }) => (
              <SFormAuth onSubmit={handleSubmit}>
                <SFormTitle>Введите свое имя</SFormTitle>
                <Field
                  name='name'
                  type='text'
                >
                  {({ input }) => (
                    <Input value={input.value} onChange={input.onChange} />
                  )}
                </Field>
                <Button
                  type='submit'
                  disabled={pristine}
                  isColor={true}
                >Войти</Button>
              </SFormAuth>
            )}
          />
        </Modal>
      </Body>
    </>
  );
}

export default App;

const Body = styled.div`
  margin-top: 100px;
`;

const SColumns = styled.div`
  display: flex;
  margin: 0 5vh;
`;

const SFormAuth = styled.form`
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
