import React, { useState } from 'react';
import styled from "styled-components";
import { Button, Input } from '../../../../ui';

const Content = ({ content, updateCard }: ContentProps) => {
  const [isChangeContent, setIsChangeContent] = useState(false);
  const [contentValue, setContentValue] = useState(content);

  const exitChange = () => {
    setIsChangeContent(false);
    setContentValue('');
  }

  const handleUpdateCard = () => {
    updateCard({ content: contentValue });
    setIsChangeContent(false);
  }

  const deleteContent = () => {
    updateCard({ content: '' });
    setIsChangeContent(false);
    setContentValue('');
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
      <CreateComment>
        <Input value={contentValue} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContentValue(e.target.value)} />
        <Button isColor={true} onClick={handleUpdateCard}>Сохранить</Button>
        <Button onClick={exitChange}>&#10006;</Button>
      </CreateComment>
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
  content?: string;
  updateCard: (updateCard: { name?: string, content?: string }) => void;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3em;

  > Button {
    width: 100px;
  }
`;


const CreateComment = styled.div`

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