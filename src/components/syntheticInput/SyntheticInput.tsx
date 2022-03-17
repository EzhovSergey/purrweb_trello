import React, { FC } from "react";
import { useInput } from "../../hooks/useInput";
import { SyntheticInput as SSyntheticInput } from './SyntheticInput.style'

type props = {
  startValue: string;
  changeValue: (value: string) => void;
}

export const SyntheticInput: FC<props> = ({startValue, changeValue}) => {
  const { bind, value } = useInput(startValue);

  const saveValue = () => {
    changeValue(value())
  }

  return (
    <SSyntheticInput
      {...bind}
      onBlur={saveValue}
    />
  )
}