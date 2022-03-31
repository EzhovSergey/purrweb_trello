import React, { useState } from 'react';
import styled from "styled-components";
import { actions, selectors } from 'store';
import { Comment } from './components';
import { Button, Input } from 'ui';
import { useAppDispatch, useAppSelector } from 'hooks';
import { Field, Form } from 'react-final-form';

const Comments = ({ cardId }: CommentsProps) => {
  const comments = useAppSelector(selectors.comments.selectByCardId(cardId));
  const userName = useAppSelector(selectors.user.selectName);
  const dispatch = useAppDispatch();
  const [isCreateComment, setIsCreateComment] = useState(false);

  const handleSubmit = (value: { comment: string }) => {
    dispatch(actions.comments.createComment({ body: value.comment, cardId, userName }))
    setIsCreateComment(false);
  }

  const handleValidate = () => {
    if (!userName) {
      return { user: 'Пользователь не авторизован' };
    }
  }

  const renderCreateComment = () => {
    if (isCreateComment) {
      return (
        <Form
          onSubmit={handleSubmit}
          validate={handleValidate}
          render={({ handleSubmit, pristine, valid }) => (
            <FormBody onSubmit={handleSubmit}>
              <Field
                name='comment'
                component={Input}
              />
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