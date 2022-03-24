import React from "react";
import styled from "styled-components";
import { User } from "../../types";
import { Button } from "../../ui";

const Header = (props: HeaderProps) => {
  return (
    <Root>
      {
        props.user
          ?
          <>
            <UserName>
              {props.user.name}
            </UserName>
            <Button isColor={true} onClick={() => props.deleteUser()}>
              Выйти
            </Button>
          </>
          :
          <Button isColor={true} onClick={() => props.isSignIn()}>
            Войти
          </Button>
      }

    </Root>
  )
}

export default Header;

type HeaderProps = {
  user?: User;
  isSignIn: () => void;
  deleteUser: () => void;
}

const Root = styled.header`
  position: fixed;
  background-color: #B1A296;
  height: 70px;
  top: 0;
  width: 100vw;
  display: flex;
  justify-content: right;
  align-items: center;

  > Button {
    margin-right: 4em;
  }
`;

const UserName = styled.span`
  font-size: 24px;
  margin-right: 1em;
`;
