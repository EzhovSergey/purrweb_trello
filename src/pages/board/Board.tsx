import React, { FC } from 'react';
import { Board as SBoard } from './Board.style';
import { ColumnsList } from './components';
import { Column as ColumnType, BoardFuntionsProps } from '../../common/types';

type props = BoardFuntionsProps & {
  columns: ColumnType[];
}

const Board: FC<props> = (props) => {
  return (
    <SBoard>
      <ColumnsList
        columns={props.columns}
        handleCreateColumn={props.handleCreateColumn}
        handleUpdateColumn={props.handleUpdateColumn}
        handleDeleteColumn={props.handleDeleteColumn}
        handleCreateCard={props.handleCreateCard}
        handleUpdateCard={props.handleUpdateCard}
        handleDeleteCard={props.handleDeleteCard}
        handleCreateComment={props.handleCreateComment}
        handleUpdateComment={props.handleUpdateComment}
        handleDeleteComment={props.handleDeleteComment}
      />
    </SBoard>
  )
}

export default Board
