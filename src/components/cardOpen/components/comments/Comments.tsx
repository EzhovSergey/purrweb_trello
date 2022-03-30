import React, { useState } from 'react';
import styled from "styled-components";
import { createComment } from '../../../../store';
import { Comment } from './components';
import { Button, Input } from '../../../../ui';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { Field, Form } from 'react-final-form';

const Comments = ({ cardId }: CommentsProps) => {
  const comments = useAppSelector(state => state.comments).filter(comment => comment.cardId === cardId);
  const userName = useAppSelector(state => state.user).name;
  const dispatch = useAppDispatch();
  const [isCreateComment, setIsCreateComment] = useState(false);

  const onSubmit = (value: { comment: string }) => {
    dispatch(createComment({ body: value.comment, cardId, userName }))
    setIsCreateComment(false);
  }

  const renderCreateComment = () => {
    if (isCreateComment) {
      return (
        <Form
          onSubmit={onSubmit}
          validate={() => {
            if (!userName) {
              return { user: 'Пользователь не авторизован' };
            }
          }}
          render={({ handleSubmit, pristine, valid }) => (
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
                  disabled={pristine || !valid}
                  isColor={true}
                >Сохранить</Button>
                <Button
                  type='reset'
                  onClick={() => setIsCreateComment(false)
                  }>&#10006;</Button>
              </Buttons>
            </FormBody>
          )}
        />
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

  Button {
    width: 100px;
  }
`;

const FormBody = styled.form`
  > Input {
    box-sizing: border-box;
    margin: 0.6em 0;
    width: 100%;
  }
`;

const Buttons = styled.div`
  margin-top: .2em;
`;

const CommentsHistory = styled.div`
  max-height: 360px;
  display: block;
  overflow: hidden;
  overflow-y: scroll;
`;