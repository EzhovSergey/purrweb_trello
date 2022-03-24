import React, { useState } from 'react';
import styled from "styled-components";
import { Card } from '../../../../types';
import { store } from '../../../../store';
import { Input } from '../../../../ui';

const Header = (props: HeaderProps) => {
  const [columnName, setColumnName] = useState(props.card.name)

  return (
    <Root>
      <Input
        value={columnName}
        isTransparent={true}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setColumnName(e.target.value)}
        onBlur={() => props.updateCard({ name: columnName })}
      />
      <Info>
        в колонке <u>{store.getColumnOne(props.card.columnId).name}</u>&nbsp;
        автор колонки <u>{props.card.authorName}</u>
      </Info>
    </Root>
  )
}

export default Header;

type HeaderProps = {
  card: Card;
  closeCard: () => void;
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
