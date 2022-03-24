import React from 'react';
import styled from "styled-components";
import { Card } from '../../../../types';
import { useInputBlur } from '../../../../hooks';
import { store } from '../../../../store';
import { Input } from '../../../../ui';

const Header = (props: HeaderProps) => {
  const { bind: bindName, value: name } = useInputBlur(
    value => props.updateCard({ name: value }),
    props.card.name
  )

  return (
    <Root>
      <Input isTransparent={true} {...bindName} />
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
