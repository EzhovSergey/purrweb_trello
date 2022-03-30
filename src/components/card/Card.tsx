import React, { useState } from 'react';
import styled from "styled-components";
import { Card as CardType } from 'types';
import { actions, selectors } from 'store';
import { Button, Modal } from 'ui';
import { CardOpen } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';

const Card = ({ card }: CardProps) => {
  const countComments = useAppSelector(selectors.comments.count(card.id));
  const dispatch = useAppDispatch();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const renderCountComments = () => {
    if (!countComments) {
      return <></>;
    }

    return (
      <p>&#9993; {countComments}</p>
    )
  }

  const handleDeleteCard = (e: React.MouseEvent) => {
    e.stopPropagation()
    dispatch(actions.cards.deleteCard({ id: card.id }))
  }

  return (
    <>
      <Root onClick={() => setIsOpenModal(true)}>
        <Name>{card.name}</Name>
        <div>
          <Button onClick={e => handleDeleteCard(e)}>&#10006;</Button>
          <Comments>
            {renderCountComments()}
          </Comments>
        </div>
      </Root>
      <Modal isOpen={isOpenModal} setIsOpen={setIsOpenModal}>
        <CardOpen
          card={card}
        />
      </Modal>
    </>
  )
}

export default Card;

type CardProps = {
  card: CardType;
}

const Root = styled.section`
  display: flex;
  background-color: #FFF;
  border-radius: 5px;
  margin: 1em 0;

  > Button {
    height: 2em;
  }
`;

const Name = styled.span`
  width: 80%;
  padding: 0.5em;
  overflow-wrap: break-word;
`;

const Comments = styled.div`
  display: flex;
  align-items: center;
  height: 1.5em;
`;
