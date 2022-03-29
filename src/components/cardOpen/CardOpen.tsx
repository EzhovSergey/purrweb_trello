import React from 'react';
import styled from "styled-components";
import { Card } from '../../types';
import { Header, Content, Comments } from './components';

const CardOpen = ({ card }: CardOpenProps) => {
  return (
    <Root>
      <Header
        card={card}
      />
      <Content
        content={card.content || ''}
        cardId={card.id}
      />
      <Comments
        cardId={card.id}
      />
    </Root>
  )
}

export default CardOpen;

type CardOpenProps = {
  card: Card;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;
