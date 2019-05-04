import * as React from 'react';
import { FC, ChangeEvent } from 'react';

import './TextField.css';

export interface TextFieldProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  disabled?: boolean
}

const TextField: FC<TextFieldProps> = ({ onChange, placeholder, disabled = false }) => {
  return (
    <input
      onChange={onChange}
      className={disabled ? 'input input-disabled' : 'input'}
      type="text"
      placeholder={placeholder}
      disabled={disabled}
    />
  )
}

export default TextField;