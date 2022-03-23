import React, { useState } from "react";
import styled from "styled-components";
import { useInput } from "../../../../hooks";
import { Button, Input } from "../../../../ui";

const CreateCard = (props: CreateCardProps) => {
  const [isCreate, setIsCreate] = useState(false);
  const { bind, value, clear } = useInput();

  const createCard = () => {
    if (value) {
      props.createCard(value)
    }

    setIsCreate(false)
    clear();
  }

  return (
    <Root>
      {
        !isCreate
          ?
          <Button onClick={() => setIsCreate(true)}>
            &#10010; Добавить карточку
          </Button>
          :
          <NewCard>
            <Input
              {...bind}
              placeholder={'Введите заголовок для карточки'}
            />
            <Button isColor={true} onClick={() => createCard()}>Добавить карточку</Button>
            <Button onClick={() => setIsCreate(false)}>&#10006;</Button>
          </NewCard>
      }
    </Root>
  )
}

export default CreateCard;

type CreateCardProps = {
  createCard: (name: string) => void;
}

const Root = styled.div`
  width: 260px;
`;

const NewCard = styled.div`

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
