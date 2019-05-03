import * as React from 'react';
import { FC, ReactNode } from 'react';
import Spinner from './spinner';

interface Props {
  isLoading?: boolean;
  onClick?: Function;
}

const Button: FC<Props> = ({ isLoading , onClick, children }) => {
  return (
    <button className={'pButton'} onClick={() => onClick()} >
      {isLoading ? <Spinner/> : children}
    </button>
  )
}

export default Button;
