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
          <Button onClick={() => updateComment()}>Сохранить</Button>
          <Button onClick={() => setIsUpdate(false)}>&#10006;</Button>
        </>
      )
    }

    return (
      <>
        <span>{props.comment.body}</span>
        <Button onClick={() => setIsUpdate(true)}>Изменить</Button>
        <Button onClick={() => props.deleteComment(props.comment.id)}>&#10006;</Button>
      </>
    )
  }

  return (
    <SComment>
      <span>
        {props.comment.authorName}
      </span>
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


const SComment = styled.div``;
