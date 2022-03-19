import React, { ReactChild } from "react";
import styled from "styled-components";

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
              {props.children}
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
  /* background-color: green;
  width: 400px;
  height: 400px; */
`;

const SModal = styled.div`
  /* background-color: red;
  width: 100px;
  height: 100px; */
`;
