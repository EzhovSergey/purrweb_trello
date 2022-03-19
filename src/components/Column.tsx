import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { Column as ColumnType, Card as CardType } from '../common/types';
import { Card, CreateCard } from '.';
import { Button, Input } from '../ui';
import { getCardsByColumnId } from '../store';
import { useInputBlur } from '../hooks';

const Column = (props: ColumnProps) => {
  const [cards, setCards] = useState<CardType[]>([]);

  const changeColumnName = (value: string) => {

  }

  const { bind, value } = useInputBlur(changeColumnName);


  const deleteColumn = () => {

  }

  const fetchCards = () => {
    const cardsByStore = getCardsByColumnId(props.column.id);
    setCards(cardsByStore);
  }

  useEffect(() => {
    fetchCards();
  }, [])

  return (
    <SColumn>
      <Input {...bind} />
      <Button onClick={deleteColumn}>&#10006;</Button>
      {
        cards.map(card =>
          <Card
            key={card.id}
            card={card}
          />
        )
      }
      <CreateCard />
    </SColumn>
  )
}

export default Column;

type ColumnProps = {
  column: ColumnType;
}

const SColumn = styled.section``;
