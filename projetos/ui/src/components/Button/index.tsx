import React from 'react';
import { ButtonWrapper, ButtonWrapperProps } from './style/ButtonWrapper';

interface ButtonBaseProps {
  /**
   * ReactNode para ser renderizado no botão
   */
  children: React.ReactNode;
  /**
   * Habilita/desabilita o botão
   */
  disabled?: boolean;
  /**
   * Cor do botão
   */
  color: 'primary.main' | 'secondary.main' | 'tertiary.main';
  /**
   * Tipo do botão
   */
  type: 'button' | 'submit' | 'reset';
  /**
   * Função a ser executado ao clicar no botão
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

type ButtonProps = ButtonBaseProps & ButtonWrapperProps;

export default function Button({
  children,
  disabled,
  color,
  type,
  onClick
}: ButtonProps): JSX.Element {
  return (
    <ButtonWrapper
      type={type}
      disabled={disabled}
      color={color}
      onClick={onClick}
    >
      {children}
    </ButtonWrapper>
  );
}

Button.defaultProps = {
  disabled: false,
  color: 'primary.main',
  type: 'button',
}
