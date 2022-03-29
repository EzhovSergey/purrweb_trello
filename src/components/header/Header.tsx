import React from "react";
import styled from "styled-components";
import { isEmpty } from 'lodash';
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Button } from "../../ui";
import { deleteUser } from "../../store";

const Header = ({ setIsOpen }: HeaderProps) => {
  const user = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  return (
    <Root>
      {
        !isEmpty(user)
          ?
          <>
            <UserName>
              {user.name}
            </UserName>
            <Button isColor={true} onClick={() => dispatch(deleteUser())}>
              Выйти
            </Button>
          </>
          :
          <Button isColor={true} onClick={() => setIsOpen(true)}>
            Войти
          </Button>
      }

    </Root>
  )
}

export default Header;

type HeaderProps = {
  setIsOpen: (value: boolean) => void;
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
