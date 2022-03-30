import React, { useState } from "react";
import { Field, Form } from "react-final-form";
import styled from "styled-components";
import { useAppDispatch } from "hooks";
import { actions } from "store";
import { Button, Input } from "ui";

const CreateColumn = () => {
  const dispatch = useAppDispatch();
  const [isCreate, setIsCreate] = useState(false);

  const handleSubmit = (values: { name: string }) => {
    dispatch(actions.columns.createColumn({ name: values.name }))
    setIsCreate(false);
  }

  return (
    <Root>
      {
        !isCreate
          ?
          <Button onClick={() => setIsCreate(true)}>
            &#10010; Добавить колонку
          </Button>
          :
          <Form
            onSubmit={handleSubmit}
            render={({ handleSubmit, pristine }) => (
              <FormBody onSubmit={handleSubmit}>
                <Field
                  name='name'
                  type='text'
                  placeholder={'Введите заголовок колонки'}
                  component={Input}
                />
                <Button
                  type='submit'
                  disabled={pristine}
                  isColor={true}
                >Добавить колонку</Button>
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

export default CreateColumn;

const Root = styled.div`
  box-sizing: border-box;
  min-width: 260px;
  height: max-content;
  margin-right: 2em;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.07);
  padding: 0.6em;
`;

const FormBody = styled.form`
  > Input {
    padding: 0.5em;
    box-sizing: border-box;
    margin-bottom: 1em;
    width: 100%;
  }

  > Button {
    margin-right: 0.5em;
  }
`;
