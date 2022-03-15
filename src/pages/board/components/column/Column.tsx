import React, { FC } from 'react';
import { Column as ColumnType } from '../../../../common/types';
import { CardsList } from '../index';
import { Column as SColumn } from './Column.style';

type props = {
  column: ColumnType
}

export const Column: FC<props> = ({ column }) => {
  return (
    <SColumn>
      <h2>{ column.name }</h2>
      <CardsList cards={column.cards} />
    </SColumn>
  )
}
