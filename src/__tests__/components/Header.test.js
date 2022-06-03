import React from 'react';
import { render, screen } from '@testing-library/react';
import { theme } from '../../style/theme';
import { ThemeProvider } from 'styled-components';
import Header from '../../components/Header';
import { BrowserRouter } from 'react-router-dom';

describe('Header component tests', () => {
  test('should be able to render the Header and sidebar', () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>
      </BrowserRouter>
    );
    const sidebar = screen.getByRole('navigation');
    const header = screen.getByRole('heading');

    expect(sidebar).toBeTruthy();
    expect(header).toBeTruthy();
  });
});
