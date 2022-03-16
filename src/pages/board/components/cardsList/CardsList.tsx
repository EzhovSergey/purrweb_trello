import React, { FC } from 'react';
import { Card as CardType, BoardFuntionsProps, Column as ColumnType } from '../../../../common/types';
import { CreateComponent } from '../../../../components';
import { Card } from '../index';
import { CardsList as SCardsList } from './CardsList.style';

type props = Pick<BoardFuntionsProps,
  'handleCreateCard' | 'handleCreateComment' | 'handleDeleteCard'
  | 'handleDeleteComment' | 'handleUpdateCard' | 'handleUpdateComment'> & {
    cards?: CardType[];
    columnId: ColumnType['id'];
  }

export const CardsList: FC<props> = (props) => {

  const renderCards = () => {
    if (!props.cards || !props.cards.length) {
      return null;
    }

    return props.cards.map(card =>
      <Card
        card={card}
        key={card.id}
        handleUpdateCard={props.handleUpdateCard}
        handleDeleteCard={props.handleDeleteCard}
        handleCreateComment={props.handleCreateComment}
        handleUpdateComment={props.handleUpdateComment}
        handleDeleteComment={props.handleDeleteComment}
      />
    )
  }

  const createCard = (value: string): void => {
    // props.handleCreateCard(props.columnId, { name: value })
  }

  return (
    <SCardsList>
      {renderCards()}
      <CreateComponent type='card' handleCreateComponent={createCard} />
    </SCardsList>
  )
}