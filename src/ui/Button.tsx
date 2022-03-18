import React, { ReactChild } from "react";
import styled from "styled-components";

const Button = (props: ButtonProps) => {

  return (
    <SButton
      onClick={props.onClick}
    >
      { props.children }
    </SButton>
  )
}

export default Button;

type ButtonProps = {
  children?: ReactChild;
  onClick: () => void;
}

const SButton = styled.button``;
