import React from 'react';
import { render, act } from '@testing-library/react-native';

import App from './App';
import theme from '@theme/index';
import { ThemeProvider } from 'styled-components/native';

describe('App Component', () => {
  it('Should verify App renders correctly', async () => {
    await act(async () => {
      render(
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      );
    });
  });
});
