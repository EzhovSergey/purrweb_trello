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
            <Button isColor={true} onClick={() => props.deleteUser()}>
              Выйти
            </Button>
          </>
          :
          <Button isColor={true} onClick={() => props.isSignIn()}>
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

const SHeader = styled.header`
  background-color: #B1A296;
  height: 70px;
  display: flex;
  justify-content: right;
  align-items: center;
  padding-right: 7%;
`;

const SUserName = styled.span`
  font-size: 24px;
  margin-right: 1em;
`;
