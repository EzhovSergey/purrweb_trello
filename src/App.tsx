import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Column as ColumnType } from './common/types';
import { Column, CreateColumn } from './components';
import { getColumns } from './store';

function App() {
  const [columns, setColumns] = useState<ColumnType[]>([]);
  
  const fetchColumns = () => {
    const columnsBuStore = getColumns();
    setColumns(columnsBuStore);
  }

  useEffect(() => {
    fetchColumns()
  }, [])

  return (
    <>
      <Columns>
        {columns.map(column =>
          <Column
            key={column.id}
            column={column}
          />
        )}
      </Columns>
      <CreateColumn />
    </>
  );
}

export default App;

const Columns = styled.div``;
