import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { Comment as CommentType } from '../common/types';
import { store } from '../store';
import { Comment } from '.';
import { Button, Input } from '../ui';
import { useInput } from '../hooks';

const CardOpenComments = (props: CardOpenCommentsProps) => {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [isCreateComment, setIsCreateComment] = useState(false);
  const { bind, value, clear } = useInput();

  const createComment = (body: string) => {
    const newComment = store.createComment(props.cardId, body);
    setComments(comments => [...comments, newComment]);
    props.changeCountComments(1);
    setIsCreateComment(false);
    clear();
  }

  const exitCreate = () => {
    setIsCreateComment(false);
    clear();
  }

  const updateComment = (id: string, body: string) => {
    const newComment = store.updateComment(id, body);
    setComments(comments => comments.map(comment =>
      comment.id === id
        ? newComment
        : comment
    ));
  }

  const deleteComment = (id: string) => {
    store.deleteComment(id);
    setComments(comments => comments.filter(comment => comment.id !== id));
    props.changeCountComments(-1);
  }

  const fetchComments = () => {
    const commentsByStore = store.getCommentsByCardId(props.cardId)
    setComments(commentsByStore)
  }

  useEffect(() => {
    fetchComments()
  }, [])

  const renderCreateComment = () => {
    if (isCreateComment) {
      return (
        <>
          <Input {...bind} />
          <div>
            <Button isColor={true} onClick={() => createComment(value)}>Сохранить</Button>
            <Button onClick={exitCreate}>&#10006;</Button>
          </div>
        </>
      )
    }

    return (
      <Button isColor={true} onClick={() => setIsCreateComment(true)}>Добавить</Button>
    )
  }

  const renderComments = () => {
    if (!comments) {
      return <></>
    }

    return comments.map(comment =>
      <Comment
        key={comment.id}
        comment={comment}
        updateComment={updateComment}
        deleteComment={deleteComment}
      />
    )
  }

  return (
    <SComments>
      <b>Комметарии</b>
      {renderCreateComment()}
      {renderComments()}
    </SComments>
  )
}

export default CardOpenComments;

type CardOpenCommentsProps = {
  cardId: string;
  changeCountComments: (count: number) => void;
}

const SComments = styled.div`
  display: flex;
  flex-direction: column;

  > Button {
    width: 100px;
  }

  > Input {
    margin: 0.6em 0;
  }
`;
