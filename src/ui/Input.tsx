import React from "react";
import styled from "styled-components";
import { useInput } from "../hooks";

const Input = (props: InputProps) => {

  const { bind, value } = useInput(props.initialValue || '');

  const saveValue = () => {
    props.changeValue(value())
  }

  return (
    <SInput 
      placeholder={props.placeholder}
      autoFocus={!!props.autoFocus}
      {...bind}
      onBlur={saveValue}
    />
  )
}

export default Input;

type InputProps = {
  changeValue: (value: string) => void;
  initialValue?: string;
  placeholder?: string;
  autoFocus?: boolean;
}

const SInput = styled.input``;
