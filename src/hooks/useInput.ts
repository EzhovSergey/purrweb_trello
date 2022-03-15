import { useState, ChangeEvent } from 'react';

export const useInput = (defaultValue = '') => {
  const [value, setValue] = useState<string>(defaultValue)

  return {
    bind: {
      value,
      onChange: (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)
    },
    clear: () => setValue(defaultValue),
    value: () => value
  }
}
