import React from 'react';
import styled from "styled-components";
import { Column as ColumnType } from 'types';
import { Card } from '..';
import { CreateCard } from './components'
import { Button, Input } from 'ui';
import { actions, selectors } from 'store';
import { useAppDispatch, useAppSelector } from 'hooks';
import { Field, Form } from 'react-final-form';

const Column = ({ column }: ColumnProps) => {
  const cards = useAppSelector(selectors.cards.all(column.id));
  const dispatch = useAppDispatch();

  const handleSubmit = (values: { name: string }) => {
    dispatch(actions.columns.updateColumn({ id: column.id, name: values.name }))
  }

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
        <Form
          onSubmit={handleSubmit}
          initialValues={{
            name: column.name
          }}
          render={({ handleSubmit }) => (
            <Field
              name='name'
              component={Input}
              onBlur={handleSubmit}
              isTransparent={true}
            />
          )}
        />
        <Button onClick={() => dispatch(actions.columns.deleteColumn({ id: column.id }))}>&#10006;</Button>
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
