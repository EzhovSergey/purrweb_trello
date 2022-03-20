import React, { useState } from 'react';
import styled from "styled-components";
import { useInput } from '../hooks';
import { Button, Input } from '../ui';

const CardOpenContent = (props: CardOpenContentProps) => {
  const [isChangeContent, setIsChangeContent] = useState(false);
  const { bind: bindContent, value: content, clear } = useInput(props.content);

  const exitChange = () => {
    setIsChangeContent(false);
    clear();
  }

  const updateCard = () => {
    props.updateCard({ content: content });
    setIsChangeContent(false);
  }

  const deleteContent = () => {
    props.updateCard({ content: '' });
    setIsChangeContent(false);
    clear();
  }

  const renderContent = () => {
    if (props.content && !isChangeContent) {
      return (
        <>
          <Button onClick={() => setIsChangeContent(true)}>Изменить</Button>
          <Button onClick={deleteContent}>Удалить</Button>
          {props.content}
        </>
      )
    }

    if (!props.content && !isChangeContent) {
      return (
        <Button onClick={() => setIsChangeContent(true)}>Добавить</Button>
      )
    }



    return (
      <>
        <Input {...bindContent} />
        <Button onClick={updateCard}>Сохранить</Button>
        <Button onClick={exitChange}>&#10006;</Button>
      </>
    )
  }

  return (
    <SContent>
      Описание
      {renderContent()}
    </SContent>
  )
}

export default CardOpenContent;

type CardOpenContentProps = {
  content?: string;
  updateCard: (updateCard: { name?: string, content?: string }) => void;
}

const SContent = styled.div``;
