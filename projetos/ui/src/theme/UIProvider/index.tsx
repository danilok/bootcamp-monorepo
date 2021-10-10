import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../index';

interface UIProviderProps {
  children: React.ReactNode;
}

const UIProvider = ({ children }: UIProviderProps) => {
  return(
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default UIProvider;
