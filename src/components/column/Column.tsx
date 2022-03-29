import React, { useState } from 'react';
import styled from "styled-components";
import { Column as ColumnType } from '../../types';
import { Card } from '..';
import { CreateCard } from './components'
import { Button, Input } from '../../ui';
import { deleteColumn, updateColumn } from '../../store';
import { useAppDispatch, useAppSelector } from '../../hooks';

const Column = ({ column }: ColumnProps) => {
  const cards = useAppSelector(state => state.cards).filter(card => card.columnId === column.id);
  const dispatch = useAppDispatch();
  const [name, setName] = useState(column.name);

  const renderCards = () => {
    if (!cards) {
      return <></>
    }

    return cards.map(card =>
      <Card
        key={card.id}
        card={card}
      />
    )
  }

  return (
    <Root>
      <Title>
        <Input
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          onBlur={() => dispatch(updateColumn({ id: column.id, name }))}
          isTransparent={true}
        />
        <Button onClick={() => dispatch(deleteColumn({ id: column.id }))}>&#10006;</Button>
      </Title>
      {renderCards()}
      <CreateCard columnId={column.id} />
    </Root>
  )
}

export default Column;

type ColumnProps = {
  column: ColumnType;
}

const Root = styled.section`
  margin-right: 2em;
  min-width: 260px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.07);
  padding: 0.6em;
  height: max-content;
`;

const Title = styled.header`
  margin: 0 0.5em;
  display: flex;
  justify-content: space-between;

  > Input {
    width: 100%;
  }
`;
