import React, { useState } from "react";
import styled from "styled-components";
import { useInput } from "../hooks";
import { Button, Input } from "../ui";

const CreateCard = (props: CreateCardProps) => {
  const [isCreate, setIsCreate] = useState(false);
  const { bind, value } = useInput();

  const createCard = () => {
    if (value) {
      props.createCard(value)
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
              {...bind}
              placeholder={'Введите заголовок для карточки'}
            />
            <Button onClick={() => createCard()}>Добавить карточку</Button>
            <Button onClick={() => setIsCreate(false)}>&#10006;</Button>
          </SNewCard>
      }
    </SCreateCard>
  )
}

export default CreateCard;

type CreateCardProps = {
  createCard: (name: string) => void;
}

const SCreateCard = styled.div``;

const SNewCard = styled.div``;
