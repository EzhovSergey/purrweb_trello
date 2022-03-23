import React from "react";
import styled from "styled-components";

const Button = (props: ButtonProps) => {

  return (
    <SButton
      theme={{ ...props }}
      onClick={props.onClick}
    >
      {props.children}
    </SButton>
  )
}

export default Button;

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  isColor?: boolean;
  width?: number;
}

const SButton = styled.button`
  background-color: ${props => props.theme.isColor ? '#1E90FF' : 'transparent'};
  color: ${props => props.theme.isColor ? '#FFFFFF' : 'gray'};
  border-radius: 2px;
  border: none;
  width: ${props => props.theme.width + 'px' || 'max-content'};
  padding: 0.4em;

  :hover {
    opacity: 0.7;
  }
`;
