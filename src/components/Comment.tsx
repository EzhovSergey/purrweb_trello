import React, { useState } from "react";
import styled from "styled-components";
import { Comment as CommentType } from "../common/types";
import { useInput } from "../hooks";
import { Button, Input } from "../ui";

const Comment = (props: CommentProps) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const { bind, value, clear } = useInput(props.comment.body);

  const updateComment = () => {
    props.updateComment(props.comment.id, value);
    setIsUpdate(false)
    clear();
  }

  const renderComment = () => {
    if (isUpdate) {
      return (
        <>
          <Input {...bind} />
          <SButtons>
            <Button isColor={true} onClick={() => updateComment()}>Сохранить</Button>
            <Button onClick={() => setIsUpdate(false)}>&#10006;</Button>
          </SButtons>
        </>
      )
    }

    return (
      <>
        <SCommentText>{props.comment.body}</SCommentText>
        <SButtons>
          <Button onClick={() => setIsUpdate(true)}>Изменить</Button>
          <Button onClick={() => props.deleteComment(props.comment.id)}>Удалить</Button>
        </SButtons>
      </>
    )
  }

  return (
    <SComment>
      <SAuthorName>
        {props.comment.authorName}
      </SAuthorName>
      {renderComment()}
    </SComment>
  )
}

export default Comment;

type CommentProps = {
  comment: CommentType;
  updateComment: (id: string, body: string) => void;
  deleteComment: (id: string) => void;
}


const SComment = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`;

const SButtons = styled.div`
  
`;

const SCommentText = styled.span`
  background-color: rgba(0, 0, 0, .1);
  padding: .2em;
  margin: .2em;
`;

const SAuthorName = styled.span`
  font-size: small;
`;