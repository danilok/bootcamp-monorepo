import React from 'react';

interface ButtonProps {
  /**
   * ReactNode para ser renderizado no botão
   */
  children: React.ReactNode;
  /**
   * Habilita/desabilita o botão
   */
  disabled?: boolean;
}

export default function Button({ children, disabled }: ButtonProps) {
  return(
    <button disabled={disabled}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  disabled: false,
}
