import React, { ReactChild } from "react";
import styled from "styled-components";
import { Button } from ".";

const Modal = (props: ModalProps) => {
  return (
    <>
      {
        props.isOpen
          ?
          <SWindow
            onClick={() => props.setIsOpen(false)}
          >
            <SModal
              onClick={event => event.stopPropagation()}
            >
              <Button onClick={() => props.setIsOpen(false)}>&#10006;</Button>
              <SContent>
                {props.children}
              </SContent>
            </SModal>
          </SWindow>
          :
          <></>
      }
    </>
  )
}

export default Modal;

type ModalProps = {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
  children?: ReactChild | ReactChild[];
}

const SWindow = styled.div`
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

const SModal = styled.div`
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

const SContent = styled.div`
  padding: 3em;
`;
