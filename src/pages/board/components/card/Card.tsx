import React, { FC } from 'react';
import { Card as CardType } from '../../../../common/types';
import { Card as SCard } from './Card.style';

type props = {
  card: CardType;
} 

export const Card: FC<props> = ({ card }) => {
  const renderCountComments = () => {
    if(!card.comments?.length) {
      return null;
    }

    return (
      <p>{ card.comments.length }</p>
    )
  } 

  return (
    <SCard>
      <h3>{ card.name }</h3>
      {renderCountComments()}
    </SCard>
  )
}