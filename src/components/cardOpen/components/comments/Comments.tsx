import React, { useState } from 'react';
import styled from "styled-components";
import { createComment } from '../../../../store';
import { Comment } from './components';
import { Button, Input } from '../../../../ui';
import { useAppDispatch, useAppSelector } from '../../../../hooks';

const Comments = ({ cardId }: CommentsProps) => {
  const comments = useAppSelector(state => state.comments).filter(comment => comment.cardId === cardId);
  const userName = useAppSelector(state => state.user).name;
  const dispatch = useAppDispatch();
  const [isCreateComment, setIsCreateComment] = useState(false);
  const [comment, setComment] = useState('');

  const handleCreateComment = () => {
    if (comment && userName) {
      dispatch(createComment({ body: comment, cardId, userName }))
    }
    exitCreate()
  }

  const exitCreate = () => {
    setIsCreateComment(false);
    setComment('');
  }

  const renderCreateComment = () => {
    if (isCreateComment) {
      return (
        <>
          <Input value={comment} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setComment(e.target.value)} />
          <div>
            <Button isColor={true} onClick={() => handleCreateComment()}>Сохранить</Button>
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
      />
    )
  }

  return (
    <Root>
      <b>Комметарии</b>
      {renderCreateComment()}
      <CommentsHistory>
        {renderComments()}
      </CommentsHistory>
    </Root>
  )
}

export default Comments;

type CommentsProps = {
  cardId: string;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;

  > Button {
    width: 100px;
  }

  > Input {
    margin: 0.6em 0;
  }
`;

const CommentsHistory = styled.div`
  max-height: 360px;
  display: block;
  overflow: hidden;
  overflow-y: scroll;
`;