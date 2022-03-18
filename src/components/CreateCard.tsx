import React, { useState } from "react";
import styled from "styled-components";
import { Button, Input } from "../ui";

const CreateCard = () => {
  const [isCreate, setIsCreate] = useState(false);

  const createCard = (value: string) => {
    if(value !== '') {
      // create
    }

    setIsCreate(false)
  }

  return (
    <SCreateCard>
      {
        !isCreate
          ?
          <Button onClick={() => setIsCreate(true)}>
            &#10010; Добавить карточку
          </Button>
          :
          <SNewCard>
            <Input
              placeholder={'Введите заголовок для карточки'}
              changeValue={createCard}
              autoFocus={true}
            />
            <Button onClick={() => setIsCreate(false)}>&#10006;</Button>
          </SNewCard>
      }
    </SCreateCard>
  )
}

export default CreateCard;

const SCreateCard = styled.div``;

const SNewCard = styled.div``;
