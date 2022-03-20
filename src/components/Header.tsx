import React from "react";
import styled from "styled-components";
import { User } from "../common/types";
import { Button } from "../ui";

const Header = (props: HeaderProps) => {
  return (
    <SHeader>
      {
        props.user
          ?
          <>
            <SUserName>
              {props.user.name}
            </SUserName>
            <Button onClick={() => props.deleteUser()}>
              Выйти
            </Button>
          </>
          :
          <Button onClick={() => props.isSignIn()}>
            Войти
          </Button>
      }

    </SHeader>
  )
}

export default Header;

type HeaderProps = {
  user?: User;
  isSignIn: () => void;
  deleteUser: () => void;
}

const SHeader = styled.header``;

const SUserName = styled.span``;
