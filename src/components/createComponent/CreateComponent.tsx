import React, { FC, useState } from "react";
import { useInput } from "../../hooks/useInput";
import { ExitButton } from "..";
import { ButtonCreate, FormCreate } from './CreateComponent.style'

type props = {
  type: 'column' | 'card';
  handleCreateComponent: (value: string) => void;
}

export const CreateComponent: FC<props> = ({ type, handleCreateComponent }) => {
  const [isCreate, setIsCreate] = useState<Boolean>(false);
  const { bind, value, clear } = useInput();

  const createComponent = () => {
    handleCreateComponent(value())
    exit()
  }

  const exit = () => {
    clear()
    setIsCreate(false)
  }

  return (
    <>
      {
        !isCreate
          ?
          <ButtonCreate type='button' onClick={() => setIsCreate(true)}>
            &#10010; Добавить {type === 'column'
              ? 'колонку'
              : 'карточку'}
          </ButtonCreate>
          :
          <FormCreate>
            <input type="text" {...bind} />

            <button type='submit' onClick={() => createComponent()}>
              Создать {type === 'column'
                ? 'колонку'
                : 'карточку'}
            </button>
            <ExitButton onClick={() => exit()} />
          </FormCreate>
      }
    </>
  )
}