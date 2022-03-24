import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { Column as ColumnType, Card as CardType } from '../../types';
import { Card } from '..';
import { CreateCard } from './components'
import { Button, Input } from '../../ui';
import { store } from '../../store';
import { useInputBlur } from '../../hooks';

const Column = (props: ColumnProps) => {
  const [cards, setCards] = useState<CardType[]>([]);
  const { bind, value } = useInputBlur(
    value => props.updateColumn(props.column.id, value),
    props.column.name
  );

  const createCard = (name: string) => {
    const newCard = store.createCard(props.column.id, name);
    setCards(cards => [...cards, newCard]);
  }

  const updateCard = (id: string, name?: string, content?: string) => {
    const newCard = store.updateCard(id, name, content);
    setCards(cards => cards.map(card =>
      card.id === id
        ? newCard
        : card
    ));
  }

  const deleteCard = (id: string) => {
    store.deleteCard(id);
    setCards(cards => cards.filter(card => card.id !== id));
  }

  const fetchCards = () => {
    const cardsByStore = store.getCardsByColumnId(props.column.id);
    setCards(cardsByStore);
  }

  useEffect(() => {
    fetchCards();
  }, [])

  const renderCards = () => {
    if (!cards) {
      return <></>
    }

    return cards.map(card =>
      <Card
        key={card.id}
        card={card}
        updateCard={updateCard}
        deleteCard={deleteCard}
      />
    )
  }

  return (
    <Root>
      <Title>
        <Input isTransparent={true} {...bind} />
        <Button onClick={() => props.deleteColumn(props.column.id)}>&#10006;</Button>
      </Title>
      {renderCards()}
      <CreateCard createCard={createCard} />
    </Root>
  )
}

export default Column;

type ColumnProps = {
  column: ColumnType;
  updateColumn: (id: string, value: string) => void;
  deleteColumn: (id: string) => void;
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
