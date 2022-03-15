import React, { FC } from 'react';
import { Card as CardType } from '../../../../common/types';
import { Card } from '../index';
import { CardsList as SCardsList } from './CardsList.style';

type props = {
  cards?: CardType[];
}

export const CardsList: FC<props> = ({ cards }) => {

  const renderCards = () => {
    if (!cards || !cards.length) {
      return null;
    }

    return cards.map(card =>
      <Card
        card={card}
        key={card.id}
      />
    )
  }

  return (
    <SCardsList>
      {renderCards()}
    </SCardsList>
  )
}