import React from 'react';
import styled from "styled-components";
import { Card } from '../../types';
import { Header, Content, Comments } from './components';

const CardOpen = ({
  card,
  updateCard,
  changeCountComments
}: CardOpenProps) => {
  const handleUpdateCard = (dataUpdateCard: { name?: string, content?: string }) => {
    updateCard(card.id, dataUpdateCard.name, dataUpdateCard.content);
  }

  return (
    <Root>
      <Header
        card={card}
        updateCard={handleUpdateCard}
      />
      <Content
        content={card.content}
        updateCard={handleUpdateCard}
      />
      <Comments
        cardId={card.id}
        changeCountComments={changeCountComments}
      />
    </Root>
  )
}

export default CardOpen;

type CardOpenProps = {
  card: Card;
  updateCard: (id: string, name?: string, content?: string) => void;
  changeCountComments: (count: number) => void;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;
