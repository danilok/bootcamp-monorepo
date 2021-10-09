import React, { ReactNode } from 'react';

interface IButton {
  children: ReactNode;
}

export default function Button({ children }: IButton) {
  return(
    <button>
      {children}
    </button>
  )
}