import React, { useState } from "react";
import { Field, Form } from "react-final-form";
import styled from "styled-components";
import { useAppDispatch } from "../../../../../../hooks";
import { deleteComment, updateComment } from "../../../../../../store";
import { Comment as CommentType } from "../../../../../../types";
import { Button, Input } from "../../../../../../ui";

const Comment = ({ comment }: CommentProps) => {
  const dispatch = useAppDispatch();
  const [isUpdate, setIsUpdate] = useState(false);

  const onSubmit = (values: { comment: string }) => {
    dispatch(updateComment({ id: comment.id, body: values.comment }))
    setIsUpdate(false)
  }

  const renderComment = () => {
    if (isUpdate) {
      return (
        <Form
          onSubmit={onSubmit}
          initialValues={{
            comment: comment.body,
          }}
          render={({ handleSubmit, pristine }) => (
            <FormBody onSubmit={handleSubmit}>
              <Field
                name='comment'
                type='text'
              >
                {({ input }) => (
                  <Input value={input.value} onChange={input.onChange} />
                )}
              </Field>
              <Buttons>
                <Button
                  type='submit'
                  disabled={pristine}
                  isColor={true}
                >Сохранить</Button>
                <Button
                  type='reset'
                  onClick={() => setIsUpdate(false)
                  }>&#10006;</Button>
              </Buttons>
            </FormBody>
          )}
        />
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
  margin-top: .3em;
`;

const FormBody = styled.form`
  > Input {
    box-sizing: border-box;
    margin-top: .5em;
    width: 100%;
  }

  > Button {
    margin: 1em .5em 1em 0;
  }
`;

const CommentText = styled.span`
  background-color: rgba(0, 0, 0, .1);
  padding: .2em;
  margin: .2em;
`;

const AuthorName = styled.span`
  font-size: small;
`;