import React, { FC } from 'react';
import { Board as SBoard } from './Board.style';
import { ColumnsList } from './components';
import { state } from '../../api/index'

type props = {

}

const Board: FC<props> = () => {
  return (
    <SBoard>
      <ColumnsList columns={state.columns}/>
    </SBoard>
  )
}

export default Board