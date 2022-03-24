import React, { useState } from 'react';
import styled from "styled-components";
import { Card } from '../../../../types';
import { store } from '../../../../store';
import { Input } from '../../../../ui';

const Header = ({ card, updateCard }: HeaderProps) => {
  const [columnName, setColumnName] = useState(card.name)

  return (
    <Root>
      <Input
        value={columnName}
        isTransparent={true}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setColumnName(e.target.value)}
        onBlur={() => updateCard({ name: columnName })}
      />
      <Info>
        в колонке <u>{store.getColumnOne(card.columnId).name}</u>&nbsp;
        автор колонки <u>{card.authorName}</u>
      </Info>
    </Root>
  )
}

export default Header;

type HeaderProps = {
  card: Card;
  updateCard: (updateCard: { name?: string, content?: string }) => void;
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
