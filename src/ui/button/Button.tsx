import React from "react";
import styled from "styled-components";

const Button = (props: ButtonProps) => {

  return (
    <Root
      theme={{ ...props }}
      {...props}
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
  background-color: ${({ theme: { isColor } }) => isColor ? '#1E90FF' : 'transparent'};
  color: ${({ theme: { isColor } }) => isColor ? '#FFFFFF' : 'gray'};
  border-radius: 2px;
  border: none;
  width: ${({ theme: { width } }) => width + 'px' || 'max-content'};
  padding: 0.2em;

  :hover {
    opacity: 0.7;
  }
`;
