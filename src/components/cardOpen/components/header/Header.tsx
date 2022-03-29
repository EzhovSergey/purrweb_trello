import React, { useState } from 'react';
import styled from "styled-components";
import { Card } from '../../../../types';
import { updateCard } from '../../../../store';
import { Input } from '../../../../ui';
import { useAppDispatch, useAppSelector } from '../../../../hooks';

const Header = ({ card }: HeaderProps) => {
  const columnsName = useAppSelector(state => state.columns).find(column => column.id === card.columnId)?.name
  const dispatch = useAppDispatch();
  const [columnName, setColumnName] = useState(card.name)

  return (
    <Root>
      <Input
        value={columnName}
        isTransparent={true}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setColumnName(e.target.value)}
        onBlur={() => dispatch(updateCard({ id: card.id, name: columnName }))}
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
