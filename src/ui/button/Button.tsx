import React from "react";
import styled from "styled-components";

const Button = (props: ButtonProps) => {

  return (
    <Root
      theme={{ ...props }}
      onClick={props.onClick}
    >
      {props.children}
    </Root>
  )
}

export default Button;

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  isColor?: boolean;
  width?: number;
}

const Root = styled.button`
  background-color: ${props => props.theme.isColor ? '#1E90FF' : 'transparent'};
  color: ${props => props.theme.isColor ? '#FFFFFF' : 'gray'};
  border-radius: 2px;
  border: none;
  width: ${props => props.theme.width + 'px' || 'max-content'};
  padding: 0.2em;

  :hover {
    opacity: 0.7;
  }
`;
