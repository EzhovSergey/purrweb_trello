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
      <Input {...bindName} />
      <Button onClick={() => props.closeCard}>&#10006;</Button>
      <SInfo>
        в колонке {store.getColumnOne(props.card.columnId).name}
        автор колонки {props.card.authorName}
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

const SCardOpenHeader = styled.header``;

const SInfo = styled.span``;
