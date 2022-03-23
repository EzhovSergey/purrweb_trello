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
        <SUpdateContent>
          <p>{props.content}</p>
          <Button onClick={() => setIsChangeContent(true)}>Изменить</Button>
          <Button onClick={deleteContent}>Удалить</Button>
        </SUpdateContent>
      )
    }

    if (!props.content && !isChangeContent) {
      return (
        <Button isColor={true} onClick={() => setIsChangeContent(true)}>Добавить</Button>
      )
    }

    return (
      <SCreateComment>
        <Input {...bindContent} />
        <Button isColor={true} onClick={updateCard}>Сохранить</Button>
        <Button onClick={exitChange}>&#10006;</Button>
      </SCreateComment>
    )
  }

  return (
    <SContent>
      <b>Описание</b>
      {renderContent()}
    </SContent>
  )
}

export default CardOpenContent;

type CardOpenContentProps = {
  content?: string;
  updateCard: (updateCard: { name?: string, content?: string }) => void;
}

const SContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3em;

  > Button {
    width: 100px;
  }
`;


const SCreateComment = styled.div`

  > Input {
    margin-top: .5em;
    width: 80%;
  }

  > Button {
    margin: 1em .5em 1em 0;
  }
`;

const SUpdateContent = styled.div``;