import React, { useState } from 'react';
import styled from "styled-components";
import { Card as CardType } from '../common/types';
import { store } from '../store';
import { Button, Modal } from '../ui';
import { CardOpen } from '.';

const Card = (props: CardProps) => {
  const [countComments, setCountComments] = useState(store.getCommentsCount(props.card.id));
  const [isOpenModal, setIsOpenModal] = useState(false);

  const renderCountComments = () => {
    if (!countComments) {
      return <></>;
    }

    return (
      <p>{countComments}</p>
    )
  }

  const deleteCard = (e: React.MouseEvent) => {
    e.stopPropagation()
    props.deleteCard(props.card.id)
  }

  const changeCountComments = (count: number) => {
    setCountComments(oldCount => oldCount + count)
  }

  return (
    <>
      <SCard onClick={() => setIsOpenModal(true)}>
        <h3>{props.card.name}</h3>
        <Button onClick={e => deleteCard(e)}>&#10006;</Button>
        {renderCountComments()}
      </SCard>
      <Modal isOpen={isOpenModal} setIsOpen={setIsOpenModal}>
        <CardOpen
          card={props.card}
          closeCard={() => setIsOpenModal(false)}
          updateCard={props.updateCard}
          deleteCard={props.deleteCard}
          changeCountComments={changeCountComments}
        />
      </Modal>
    </>
  )
}

export default Card;

type CardProps = {
  card: CardType;
  updateCard: (id: string, name?: string, content?: string) => void;
  deleteCard: (id: string) => void;
}

const SCard = styled.section``;
