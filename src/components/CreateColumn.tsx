import React, { useState } from "react";
import styled from "styled-components";
import { useInput } from "../hooks";
import { Button, Input } from "../ui";

const CreateColumn = () => {
  const [isCreate, setIsCreate] = useState(false);
  const { bind, value, clear } = useInput();

  const createColumn = () => {
    if (!!!value) {
      // create
    }

    setIsCreate(false)
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
            <Button onClick={() => createColumn()}>Добавить колонку</Button>
            <Button onClick={() => setIsCreate(false)}>&#10006;</Button>
          </SNewColumn>
      }
    </SCreateColumn>
  )
}

export default CreateColumn;

const SCreateColumn = styled.div``;

const SNewColumn = styled.div``;
