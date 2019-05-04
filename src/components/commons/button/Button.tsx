import * as React from 'react';
import { FC } from 'react';

import './Button.css';

export interface ButtonProps {
  onClick?: (e: any) => void
  disabled?: boolean
  type?: ButtonType
}

export type ButtonType = 'subtle' | 'default'

const Button: FC<ButtonProps> = ({ onClick, disabled = false, type = 'default', children }) => {

  const resolveClassName = (type: ButtonType, disabled: boolean): string => {
    let className: string = '';
    switch (type) {
      case 'subtle':
        className = 'button button-subtle';
        break;
      default:
        className = 'button';
        break;
    }
    return disabled ? className + ' button-disabled' : className;
  }

  return (
    <button
      onClick={onClick}
      className={resolveClassName(type, disabled)}
      type='button'
      disabled={disabled}>
      {children}
    </button>
  )
};

export default Button;