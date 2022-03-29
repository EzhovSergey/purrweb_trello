import React, { useState } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../../../../../hooks";
import { deleteComment, updateComment } from "../../../../../../store";
import { Comment as CommentType } from "../../../../../../types";
import { Button, Input } from "../../../../../../ui";

const Comment = ({ comment }: CommentProps) => {
  const dispatch = useAppDispatch();
  const [isUpdate, setIsUpdate] = useState(false);
  const [commentValue, setCommentValue] = useState(comment.body);

  const handleUpdateComment = () => {
    dispatch(updateComment({ id: comment.id, body: commentValue }))
    setIsUpdate(false)
    setCommentValue('');
  }

  const renderComment = () => {
    if (isUpdate) {
      return (
        <>
          <Input value={commentValue} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCommentValue(e.target.value)} />
          <Buttons>
            <Button isColor={true} onClick={() => handleUpdateComment()}>Сохранить</Button>
            <Button onClick={() => setIsUpdate(false)}>&#10006;</Button>
          </Buttons>
        </>
      )
    }

    return (
      <>
        <CommentText>{comment.body}</CommentText>
        <Buttons>
          <Button onClick={() => setIsUpdate(true)}>Изменить</Button>
          <Button onClick={() => dispatch(deleteComment({ id: comment.id }))}>Удалить</Button>
        </Buttons>
      </>
    )
  }

  return (
    <Root>
      <AuthorName>
        {comment.authorName}
      </AuthorName>
      {renderComment()}
    </Root>
  )
}

export default Comment;

type CommentProps = {
  comment: CommentType;
}


const Root = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`;

const Buttons = styled.div`
  
`;

const CommentText = styled.span`
  background-color: rgba(0, 0, 0, .1);
  padding: .2em;
  margin: .2em;
`;

const AuthorName = styled.span`
  font-size: small;
`;