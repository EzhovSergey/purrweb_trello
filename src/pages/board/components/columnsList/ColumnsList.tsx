import React, { FC } from 'react';
import { Column as ColumnType, BoardFuntionsProps } from '../../../../common/types';
import { CreateComponent } from '../../../../components/';
import { Column } from '..';
import { ColumnsList as SColumnsList } from './ColumnsList.style';

type props = BoardFuntionsProps & {
  columns?: ColumnType[];
}

export const ColumnsList: FC<props> = (props) => {
  
  const renderColumns = () => {
    if (!props.columns || !props.columns.length) {
      return null;
    }

    return props.columns.map(column =>
      <Column
        column={column}
        key={column.id}
        handleUpdateColumn={props.handleUpdateColumn}
        handleDeleteColumn={props.handleDeleteColumn}
        handleCreateCard={props.handleCreateCard}
        handleUpdateCard={props.handleUpdateCard}
        handleDeleteCard={props.handleDeleteCard}
        handleCreateComment={props.handleCreateComment}
        handleUpdateComment={props.handleUpdateComment}
        handleDeleteComment={props.handleDeleteComment}
      />
    )
  }

  const createColumn = (value: string): void => {
    props.handleCreateColumn({name: value})
  }

  return (
    <SColumnsList>
      {renderColumns()}
      <CreateComponent
        type='column'
        handleCreateComponent={createColumn}
      />
    </SColumnsList>
  )
}