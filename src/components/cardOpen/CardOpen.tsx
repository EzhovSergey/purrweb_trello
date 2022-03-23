import React from 'react';
import styled from "styled-components";
import { Card } from '../../types';
import { Header, Content, Comments } from './components';

const CardOpen = (props: CardOpenProps) => {
  const updateCard = (updateCard: { name?: string, content?: string }) => {
    props.updateCard(props.card.id, updateCard.name, updateCard.content);
  }

  return (
    <Root>
      <Header
        card={props.card}
        closeCard={props.closeCard}
        updateCard={updateCard}
      />
      <Content
        content={props.card.content}
        updateCard={updateCard}
      />
      <Comments
        cardId={props.card.id}
        changeCountComments={props.changeCountComments}
      />
    </Root>
  )
}

export default CardOpen;

type CardOpenProps = {
  card: Card;
  closeCard: () => void;
  updateCard: (id: string, name?: string, content?: string) => void;
  deleteCard: (id: string) => void;
  changeCountComments: (count: number) => void;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;
