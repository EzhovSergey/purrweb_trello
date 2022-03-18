import React, { useState } from "react";
import styled from "styled-components";
import { Button, Input } from "../ui";

const CreateColumn = () => {
  const [isCreate, setIsCreate] = useState(false);

  const createColumn = (value: string) => {
    if(value !== '') {
      // create
    }

    setIsCreate(false)
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
              placeholder={'Введите заголовок колонки'}
              changeValue={createColumn}
              autoFocus={true}
            />
            <Button onClick={() => setIsCreate(false)}>&#10006;</Button>
          </SNewColumn>
      }
    </SCreateColumn>
  )
}

export default CreateColumn;

const SCreateColumn = styled.div``;

const SNewColumn = styled.div``;
