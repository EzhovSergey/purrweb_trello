import React, { ReactChild } from "react";
import styled from "styled-components";
import { Button } from "..";

const Modal = (props: ModalProps) => {
  return props.isOpen
    ?
    <Root
      onClick={() => props.setIsOpen(false)}
    >
      <ModalWindow
        onClick={event => event.stopPropagation()}
      >
        <Button onClick={() => props.setIsOpen(false)}>&#10006;</Button>
        <Content>
          {props.children}
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
  position: absolute;
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
  height: max-content;
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
