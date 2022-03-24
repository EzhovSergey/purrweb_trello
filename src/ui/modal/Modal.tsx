import React, { ReactChild } from "react";
import styled from "styled-components";
import { Button } from "..";

const Modal = ({ isOpen, setIsOpen, children }: ModalProps) => {
  return isOpen
    ?
    <Root
      onClick={() => setIsOpen(false)}
    >
      <ModalWindow
        onClick={event => event.stopPropagation()}
      >
        <Button onClick={() => setIsOpen(false)}>&#10006;</Button>
        <Content>
          {children}
        </Content>
      </ModalWindow>
    </Root>
    :
    <></>
}

export default Modal;

type ModalProps = {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
  children?: ReactChild | ReactChild[];
}

const Root = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
`;

const ModalWindow = styled.div`
  position: relative;
  background-color: #FFF;
  width: 30vw;
  min-width: 370px;
  height: max-content;
  max-height: 80%;
  border-radius: 10px;

  > Button {
    position: absolute;
    top: 1em;
    right: 1em;
  }
`;

const Content = styled.div`
  padding: 3em;
`;
