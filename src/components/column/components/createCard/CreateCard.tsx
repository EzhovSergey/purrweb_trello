import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { createCard } from "../../../../store";
import { Button, Input } from "../../../../ui";

const CreateCard = ({ columnId }: CreateCardProps) => {
  const dispatch = useAppDispatch();
  const userName = useAppSelector(state => state.user).name;
  const [isCreate, setIsCreate] = useState(false);
  const [name, setName] = useState('');

  const handleCreateCard = () => {
    if (name && userName) {
      dispatch(createCard({ name, columnId, userName }))
    }
    setIsCreate(false)
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
            &#10010; Добавить карточку
          </Button>
          :
          <NewCard>
            <Input
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              placeholder={'Введите заголовок для карточки'}
            />
            <Button isColor={true} onClick={() => handleCreateCard()}>Добавить карточку</Button>
            <Button onClick={() => setIsCreate(false)}>&#10006;</Button>
          </NewCard>
      }
    </Root>
  )
}

export default CreateCard;

type CreateCardProps = {
  columnId: string;
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
