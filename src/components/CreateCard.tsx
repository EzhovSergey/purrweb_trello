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
    <>
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
            <Button isColor={true} onClick={() => createCard()}>Добавить карточку</Button>
            <Button onClick={() => setIsCreate(false)}>&#10006;</Button>
          </SNewCard>
      }
    </>
  )
}

export default CreateCard;

type CreateCardProps = {
  createCard: (name: string) => void;
}

const SNewCard = styled.div`

  > Input {
    width: 100%;
    padding: 0.5em;
    box-sizing: border-box;
    margin-bottom: 1em;
  }

  > Button {
    margin-right: 0.5em;
  }
`;
