import React from "react";
import styled from "styled-components";
import { User } from "../../types";
import { Button } from "../../ui";

const Header = ({ user, isSignIn, deleteUser }: HeaderProps) => {
  return (
    <Root>
      {
        user
          ?
          <>
            <UserName>
              {user.name}
            </UserName>
            <Button isColor={true} onClick={() => deleteUser()}>
              Выйти
            </Button>
          </>
          :
          <Button isColor={true} onClick={() => isSignIn()}>
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
