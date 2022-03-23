import React from 'react';
import styled from "styled-components";
import { Card } from '../common/types';
import { useInputBlur } from '../hooks';
import { store } from '../store';
import { Button, Input } from '../ui';

const CardOpenHeader = (props: CardOpenHeaderProps) => {
  const { bind: bindName, value: name } = useInputBlur(
    value => props.updateCard({ name: value }),
    props.card.name
  )

  return (
    <SCardOpenHeader>
      <Input isTransparent={true} {...bindName} />
      <SInfo>
        в колонке <u>{store.getColumnOne(props.card.columnId).name}</u>&nbsp;
        автор колонки <u>{props.card.authorName}</u>
      </SInfo>
    </SCardOpenHeader>
  )
}

export default CardOpenHeader;

type CardOpenHeaderProps = {
  card: Card;
  closeCard: () => void;
  updateCard: (updateCard: { name?: string, content?: string }) => void;
}

const SCardOpenHeader = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 3em;

  > Input {
    font-size: 1.5em;
  }
`;

const SInfo = styled.span``;
