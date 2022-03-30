import React from 'react';
import styled from "styled-components";
import { Card } from 'types';
import { actions, selectors } from 'store';
import { Input } from 'ui';
import { useAppDispatch, useAppSelector } from 'hooks';
import { Field, Form } from 'react-final-form';

const Header = ({ card }: HeaderProps) => {
  const columnsName = useAppSelector(selectors.columns.name(card.columnId))
  const dispatch = useAppDispatch();

  const handleSubmit = (values: { name: string }) => {
    dispatch(actions.cards.updateCard({ id: card.id, name: values.name }))
  }

  return (
    <Root>
      <Form
        onSubmit={handleSubmit}
        initialValues={{
          name: card.name
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
