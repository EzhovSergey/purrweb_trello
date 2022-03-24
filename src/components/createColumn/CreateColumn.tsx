import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Input } from "../../ui";

const CreateColumn = (props: CreateColumnProps) => {
  const [isCreate, setIsCreate] = useState(false);
  const [name, setName] = useState('');

  const createColumn = () => {
    if (name) {
      props.createColumn(name);
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
            <Button isColor={true} onClick={() => createColumn()}>Добавить колонку</Button>
            <Button onClick={() => setIsCreate(false)}>&#10006;</Button>
          </>
      }
    </Root>
  )
}

export default CreateColumn;

type CreateColumnProps = {
  createColumn: (value: string) => void;
}

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
