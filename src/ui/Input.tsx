import React from "react";
import styled from "styled-components";

const Input = (props: InputProps) => {
  return (
    <SInput
      theme={{ ...props }}
      {...props}
    />
  )
}

export default Input;

type InputProps = React.HTMLAttributes<HTMLInputElement> & {
  isTransparent?: boolean;
}

const SInput = styled.input`
  border: none;
  outline: none;
  
  background-color: ${props => props.theme.isTransparent ? 'rgba(0, 0, 0, 0)' : null};
  border: ${props => props.theme.isTransparent ? 'solid 2px transparent' : 'solid 2px #1E90FF'};

  :hover, :focus {
    border: solid 2px #1E90FF;
  };
`;
