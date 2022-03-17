import React, { FC } from "react";
import { ExitButton as SExitButton } from './ExitButton.style'

type props = {
  onClick: () => void;
}

export const ExitButton: FC<props> = (props) => {
  return (
    <SExitButton
      onClick={props.onClick}
    >&#10006;</SExitButton>
  )
}