import React, { useState } from 'react';
import styled from "styled-components";
import { Button, Input } from '../../../../ui';

const Content = (props: ContentProps) => {
  const [isChangeContent, setIsChangeContent] = useState(false);
  const [content, setContent] = useState(props.content);

  const exitChange = () => {
    setIsChangeContent(false);
    setContent('');
  }

  const updateCard = () => {
    props.updateCard({ content: content });
    setIsChangeContent(false);
  }

  const deleteContent = () => {
    props.updateCard({ content: '' });
    setIsChangeContent(false);
    setContent('');
  }

  const renderContent = () => {
    if (props.content && !isChangeContent) {
      return (
        <UpdateContent>
          <p>{props.content}</p>
          <Button onClick={() => setIsChangeContent(true)}>Изменить</Button>
          <Button onClick={deleteContent}>Удалить</Button>
        </UpdateContent>
      )
    }

    if (!props.content && !isChangeContent) {
      return (
        <Button isColor={true} onClick={() => setIsChangeContent(true)}>Добавить</Button>
      )
    }

    return (
      <CreateComment>
        <Input value={content} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContent(e.target.value)} />
        <Button isColor={true} onClick={updateCard}>Сохранить</Button>
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