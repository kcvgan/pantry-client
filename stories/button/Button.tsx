import * as React from 'react';
import { FC } from 'react';

import './Button.css';

export interface IButtonProps {
  onClick?: (e: any) => void
  disabled?: boolean
}

const Button: FC<IButtonProps> = ({ onClick, disabled = false, children }) => (
  <button
    onClick={onClick}
    className={disabled ? 'pButton-disabled' : 'pButton'}
    type='button'
    disabled={disabled}>
    {children}
  </button>
);

export default Button;