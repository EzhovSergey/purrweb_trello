import React, { useState } from "react";
import styled from "styled-components";
import { useInput } from "../hooks";
import { Button, Input } from "../ui";

const CreateColumn = (props: CreateColumnProps) => {
  const [isCreate, setIsCreate] = useState(false);
  const { bind, value, clear } = useInput();

  const createColumn = () => {
    if (value) {
      props.createColumn(value);
    }

    setIsCreate(false);
    clear();
  }

  return (
    <SCreateColumn>
      {
        !isCreate
          ?
          <Button onClick={() => setIsCreate(true)}>
            &#10010; Добавить колонку
          </Button>
          :
          <SNewColumn>
            <Input
              {...bind}
              placeholder={'Введите заголовок колонки'}
            />
            <Button isColor={true} onClick={() => createColumn()}>Добавить колонку</Button>
            <Button onClick={() => setIsCreate(false)}>&#10006;</Button>
          </SNewColumn>
      }
    </SCreateColumn>
  )
}

export default CreateColumn;

type CreateColumnProps = {
  createColumn: (value: string) => void;
}

const SCreateColumn = styled.div``;

const SNewColumn = styled.div`
box-sizing: border-box;
  width: 260px;
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
