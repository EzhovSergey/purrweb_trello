import React, { useState } from 'react';
import styled from "styled-components";
import { Card } from '../../../../types';
import { updateCard } from '../../../../store';
import { Input } from '../../../../ui';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { Field, Form } from 'react-final-form';

const Header = ({ card }: HeaderProps) => {
  const columnsName = useAppSelector(state => state.columns).find(column => column.id === card.columnId)?.name
  const dispatch = useAppDispatch();

  const onSubmit = (values: { name: string }) => {
    dispatch(updateCard({ id: card.id, name: values.name }))
  }

  return (
    <Root>
      <Form
        onSubmit={onSubmit}
        initialValues={{
          name: card.name
        }}
        render={({ handleSubmit }) => (
          <Field
            name='name'
            type='text'
          >
            {({ input }) => (
              <Input
                value={input.value}
                onChange={input.onChange}
                onBlur={handleSubmit}
                isTransparent={true}
              />
            )}
          </Field>
        )}
      />
      <Info>
        в колонке <u>{columnsName}</u>&nbsp;
        автор колонки <u>{card.authorName}</u>
      </Info>
    </Root>
  )
}

export default Header;

type HeaderProps = {
  card: Card;
}

const Root = styled.header`
  display: flex;
  flex-direction: column;

  > Input {
    font-size: 1.5em;
  }
`;

const Info = styled.span`
  margin-bottom: 3em;
`;
