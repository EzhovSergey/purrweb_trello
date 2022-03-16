import React, { useEffect, useState } from 'react';
import Board from './pages/board/Board';
import { Column as ColumnType, BoardFuntionsProps } from './common/types';
import { state } from './api/index'


function App() {
  const [columns, setColumns] = useState<ColumnType[]>([]);

  const getColumns = (): ColumnType[] => {
    return state.columns
  }

  const handleCreateColumn: BoardFuntionsProps['handleCreateColumn'] = (createColumnDto) => {

  }

  const handleUpdateColumn: BoardFuntionsProps['handleUpdateColumn'] = (id, updateColumnDTO) => {

  }

  const handleDeleteColumn: BoardFuntionsProps['handleDeleteColumn'] = (id) => {

  }

  const handleCreateCard: BoardFuntionsProps['handleCreateCard'] = (idColumn, createCardDTO) => {
    
  }

  const handleUpdateCard: BoardFuntionsProps['handleUpdateCard'] = (id, updateCardDTO) => {
  }

  const handleDeleteCard: BoardFuntionsProps['handleDeleteCard'] = (id) => {

  }

  const handleCreateComment: BoardFuntionsProps['handleCreateComment'] = (idCard, createCommentDTO) => {

  }

  const handleUpdateComment: BoardFuntionsProps['handleUpdateComment'] = (id, updateCommentDTO) => {
  
  }

  const handleDeleteComment: BoardFuntionsProps['handleDeleteComment'] = (id) => {

  }

  useEffect(() => {
    setColumns(getColumns())
  }, [])

  return (
    <>
      <Board
        columns={columns}
        handleCreateColumn={handleCreateColumn}
        handleUpdateColumn={handleUpdateColumn}
        handleDeleteColumn={handleDeleteColumn}
        handleCreateCard={handleCreateCard}
        handleUpdateCard={handleUpdateCard}
        handleDeleteCard={handleDeleteCard}
        handleCreateComment={handleCreateComment}
        handleUpdateComment={handleUpdateComment}
        handleDeleteComment={handleDeleteComment}
      />
    </>
  );
}

export default App;
