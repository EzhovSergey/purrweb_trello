import React, { useState } from "react";
import styled from "styled-components";
import { Comment as CommentType } from "../../../../../../types";
import { Button, Input } from "../../../../../../ui";

const Comment = ({ comment, updateComment, deleteComment }: CommentProps) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [commentValue, setCommentValue] = useState(comment.body);

  const handleUpdateComment = () => {
    updateComment(comment.id, commentValue);
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
          <Button onClick={() => deleteComment(comment.id)}>Удалить</Button>
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
  updateComment: (id: string, body: string) => void;
  deleteComment: (id: string) => void;
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