import React, { ReactChild } from "react";
import styled from "styled-components";

const Button = (props: ButtonProps) => {

  return (
    <SButton
      onClick={props.onClick}
    >
      {props.children}
    </SButton>
  )
}

export default Button;

type ButtonProps = React.HTMLAttributes<HTMLButtonElement>

const SButton = styled.button``;
