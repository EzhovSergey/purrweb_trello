import React, { FC } from 'react';
import { Column as ColumnType } from '../../../../common/types';
import { Column } from '../index';
import { ColumnsList as SColumnsList } from './ColumnsList.style';

type props = {
  columns: ColumnType[];
}

export const ColumnsList: FC<props> = ({ columns }) => {

  const renderColumns = (columns: ColumnType[]) => {
    if(!columns.length) {
      return null;
    }
    
    return columns.map(column => 
      <Column 
        column={column}
        key={column.id}
      />
    )
  }

  return (
    <SColumnsList>
      {renderColumns(columns)}
    </SColumnsList>
  )
}