import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../hooks";
import { createColumn } from "../../store";
import { Button, Input } from "../../ui";

const CreateColumn = () => {
  const dispatch = useAppDispatch();
  const [isCreate, setIsCreate] = useState(false);
  const [name, setName] = useState('');

  const handleCreateColumn = () => {
    if (name) {
      dispatch(createColumn({ name }))
    }

    setIsCreate(false);
    setName('');
  }

  useEffect(() => {
    setName('')
  }, [isCreate])

  return (
    <Root>
      {
        !isCreate
          ?
          <Button onClick={() => setIsCreate(true)}>
            &#10010; Добавить колонку
          </Button>
          :
          <>
            <Input
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              placeholder={'Введите заголовок колонки'}
            />
            <Button isColor={true} onClick={() => handleCreateColumn()}>Добавить колонку</Button>
            <Button onClick={() => setIsCreate(false)}>&#10006;</Button>
          </>
      }
    </Root>
  )
}

export default CreateColumn;

const Root = styled.div`
  box-sizing: border-box;
  min-width: 260px;
  height: max-content;
  margin-right: 2em;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.07);
  padding: 0.6em;

  > Input {
    padding: 0.5em;
    box-sizing: border-box;
    margin-bottom: 1em;
    width: 100%;
  }

  > Button {
    margin-right: 0.5em;
  }
`;
