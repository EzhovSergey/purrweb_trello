import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { getCommentsByCardId } from '../store';
import { Card as CardType, Comment } from '../common/types';
import { Button } from '../ui';

const Card = (props: CardProps) => {
  const [comments, setComments] = useState<Comment[]>([])

  const deleteCard = () => {

  }

  const fetchComments = () => {
    const commentsByStore = getCommentsByCardId(props.card.id)
    setComments(commentsByStore)
  }

  useEffect(() => {
    fetchComments()
  }, [])

  const renderCountComments = () => {
    if(!comments.length) {
      return null;
    }

    return (
      <p>{ comments.length }</p>
    )
  } 

  return (
    <SCard>
      <h3>{ props.card.name }</h3>
      <Button onClick={deleteCard}>&#10006;</Button>
      {renderCountComments()}
    </SCard>
  )
}

export default Card;

type CardProps = {
  card: CardType;
}

const SCard = styled.section``;
