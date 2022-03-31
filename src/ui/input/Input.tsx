import React from "react";
import { FieldRenderProps } from "react-final-form";
import styled from "styled-components";

const Input = (props: InputProps) => {
  return (
    <Root
      value={`${props.input.value}`}
      onChange={props.input.onChange}
      theme={{ ...props }}
      {...props}
    />
  )
}

export default Input;

type InputProps = FieldRenderProps<HTMLInputElement> & {
  isTransparent?: boolean;
}

const Root = styled.input`
  border: none;
  outline: none;
  
  background-color: ${({ theme: { isTransparent } }) => isTransparent ? 'rgba(0, 0, 0, 0)' : null};
  border: ${({ theme: { isTransparent } }) => isTransparent ? 'solid 2px transparent' : 'solid 2px #1E90FF'};

  :hover, :focus {
    border: solid 2px #1E90FF;
  };
`;
