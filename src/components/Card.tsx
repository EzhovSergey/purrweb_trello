import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { store } from '../store';
import { Card as CardType, Comment } from '../common/types';
import { Button } from '../ui';

const Card = (props: CardProps) => {
  const [comments, setComments] = useState<Comment[]>([])

  const fetchComments = () => {
    const commentsByStore = store.getCommentsByCardId(props.card.id)
    setComments(commentsByStore)
  }

  useEffect(() => {
    fetchComments()
  }, [])

  const renderCountComments = () => {
    if (!comments.length) {
      return null;
    }

    return (
      <p>{comments.length}</p>
    )
  }

  return (
    <SCard>
      <h3>{props.card.name}</h3>
      <Button onClick={() => props.deleteCard(props.card.id)}>&#10006;</Button>
      {renderCountComments()}
    </SCard>
  )
}

export default Card;

type CardProps = {
  card: CardType;
  updateCard: (id: string, name?: string, content?: string) => void;
  deleteCard: (id: string) => void;
}

const SCard = styled.section``;
