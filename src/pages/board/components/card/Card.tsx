import React, { FC } from 'react';
import { BoardFuntionsProps, Card as CardType } from '../../../../common/types';
import { Card as SCard } from './Card.style';

type props = Pick<BoardFuntionsProps,
 'handleCreateComment' | 'handleDeleteCard'
| 'handleDeleteComment' | 'handleUpdateCard' | 'handleUpdateComment'> & {
  card: CardType;
} 

export const Card: FC<props> = (props) => {
  const renderCountComments = () => {
    if(!props.card.comments?.length) {
      return null;
    }

    return (
      <p>{ props.card.comments.length }</p>
    )
  } 

  return (
    <SCard>
      <h3>{ props.card.name }</h3>
      {renderCountComments()}
    </SCard>
  )
}