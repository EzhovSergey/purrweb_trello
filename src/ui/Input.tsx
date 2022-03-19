import React from "react";
import styled from "styled-components";

const Input = (props: InputProps) => {
  return (
    <SInput
      {...props}
    />
  )
}

export default Input;

type InputProps = React.HTMLAttributes<HTMLInputElement>

const SInput = styled.input``;
