import React, { useState } from "react";
import { Field, Form } from "react-final-form";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "hooks";
import { actions, selectors } from "store";
import { Button, Input } from "ui";

const CreateCard = ({ columnId }: CreateCardProps) => {
  const dispatch = useAppDispatch();
  const userName = useAppSelector(selectors.user.name);
  const [isCreate, setIsCreate] = useState(false);

  const handleSubmit = (values: { name: string }) => {
    dispatch(actions.cards.createCard({ name: values.name, columnId, userName }))
    setIsCreate(false)
  }

  return (
    <Root>
      {
        !isCreate
          ?
          <Button onClick={() => setIsCreate(true)}>
            &#10010; Добавить карточку
          </Button>
          :
          <Form
            onSubmit={handleSubmit}
            validate={() => {
              if (!userName) {
                return { user: 'Пользователь не авторизован' };
              }
            }}
            render={({ handleSubmit, pristine, valid }) => (
              <FormBody onSubmit={handleSubmit}>
                <Field
                  name='name'
                  type='text'
                  placeholder={'Введите заголовок для карточки'}
                  component={Input}
                />
                <Button
                  type='submit'
                  disabled={pristine || !valid}
                  isColor={true}
                >Добавить карточку</Button>
                <Button
                  type='reset'
                  onClick={() => setIsCreate(false)}
                >&#10006;</Button>
              </FormBody>
            )}
          />
      }
    </Root>
  )
}

export default CreateCard;

type CreateCardProps = {
  columnId: string;
}

const Root = styled.div`
  width: 260px;
`;

const FormBody = styled.form`
  > Input {
    width: 100%;
    padding: 0.5em;
    box-sizing: border-box;
    margin-bottom: 1em;
  }

  > Button {
    margin-right: 0.5em;
  }
`;
