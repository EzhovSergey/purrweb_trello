import React from 'react';
import styled from "styled-components";
import { Card } from '../common/types';
import { CardOpenHeader, CardOpenContent, CardOpenComments } from '.';

const CardOpen = (props: CardOpenProps) => {
  const updateCard = (updateCard: { name?: string, content?: string }) => {
    props.updateCard(props.card.id, updateCard.name, updateCard.content);
  }

  return (
    <SCardOpen>
      <CardOpenHeader
        card={props.card}
        closeCard={props.closeCard}
        updateCard={updateCard}
      />
      <CardOpenContent
        content={props.card.content}
        updateCard={updateCard}
      />
      <CardOpenComments
        cardId={props.card.id}
        changeCountComments={props.changeCountComments}
      />
    </SCardOpen>
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

const SCardOpen = styled.div``;
