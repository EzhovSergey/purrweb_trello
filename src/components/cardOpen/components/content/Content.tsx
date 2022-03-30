import React, { useState } from 'react';
import { Field, Form } from 'react-final-form';
import styled from "styled-components";
import { useAppDispatch } from '../../../../hooks';
import { updateCard } from '../../../../store';
import { Button, Input } from '../../../../ui';

const Content = ({ content, cardId }: ContentProps) => {
  const dispatch = useAppDispatch();
  const [isChangeContent, setIsChangeContent] = useState(false);

  const onSubmit = (values: { content: string }) => {
    dispatch(updateCard({ id: cardId, content: values.content }));
    setIsChangeContent(false);
  }

  const deleteContent = () => {
    dispatch(updateCard({ id: cardId, content: '' }));
    setIsChangeContent(false);
  }

  const renderContent = () => {
    if (content && !isChangeContent) {
      return (
        <UpdateContent>
          <p>{content}</p>
          <Button onClick={() => setIsChangeContent(true)}>Изменить</Button>
          <Button onClick={deleteContent}>Удалить</Button>
        </UpdateContent>
      )
    }

    if (!content && !isChangeContent) {
      return (
        <Button isColor={true} onClick={() => setIsChangeContent(true)}>Добавить</Button>
      )
    }

    return (
      <Form
        onSubmit={onSubmit}
        initialValues={{
          content,
        }}
        render={({ handleSubmit, pristine }) => (
          <FormBody onSubmit={handleSubmit}>
            <Field
              name='content'
              type='text'
            >
              {({ input }) => (
                <Input value={input.value} onChange={input.onChange} />
              )}
            </Field>
            <Button
              type='submit'
              disabled={pristine}
              isColor={true}
            >Сохранить</Button>
            <Button
              type='reset'
              onClick={() => setIsChangeContent(false)
              }>&#10006;</Button>
          </FormBody>
        )}
      />
    )
  }

  return (
    <Root>
      <b>Описание</b>
      {renderContent()}
    </Root>
  )
}

export default Content;

type ContentProps = {
  content: string;
  cardId: string;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3em;

  > Button {
    width: 100px;
  }
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

const UpdateContent = styled.div``;