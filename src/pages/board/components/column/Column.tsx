import React, { FC } from 'react';
import { Column as ColumnType, BoardFuntionsProps } from '../../../../common/types';
import { ExitButton, SyntheticInput } from '../../../../components';
import { CardsList } from '../index';
import { Column as SColumn } from './Column.style';

type props = Pick<BoardFuntionsProps,
  'handleCreateCard' | 'handleCreateComment' | 'handleDeleteCard'
  | 'handleDeleteColumn' | 'handleDeleteComment' | 'handleUpdateCard'
  | 'handleUpdateColumn' | 'handleUpdateComment'> & {
  column: ColumnType;
}

export const Column: FC<props> = (props) => {

  const changeColumnName = (value: string): void => {
    props.handleUpdateColumn(props.column.id, { name: value })
  }

  return (
    <SColumn>
      <SyntheticInput startValue={props.column.name} changeValue={changeColumnName} />
      <ExitButton onClick={() => props.handleDeleteColumn} />
      <CardsList
        columnId={props.column.id}
        cards={props.column.cards}
        handleCreateCard={props.handleCreateCard}
        handleUpdateCard={props.handleUpdateCard}
        handleDeleteCard={props.handleDeleteCard}
        handleCreateComment={props.handleCreateComment}
        handleUpdateComment={props.handleUpdateComment}
        handleDeleteComment={props.handleDeleteComment}
      />
    </SColumn>
  )
}
