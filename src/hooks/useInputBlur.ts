import { useState, ChangeEvent } from 'react';

export const useInputBlur = (changeValue: (value: string) => void, defaultValue = '') => {
  const [value, setValue] = useState<string>(defaultValue)

  return {
    bind: {
      value,
      onChange: (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value),
      onBlur: () => changeValue(value),
    },
    value,
  }
}