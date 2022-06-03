import React from 'react';
import { render, screen } from '@testing-library/react';
import { theme } from '../../style/theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import SideBar from '../../components/SideBar';

describe('Sidebar component tests', () => {
  test('should be able to render the sidebar', () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <SideBar />
        </ThemeProvider>
      </BrowserRouter>
    );
    const sidebar = screen.getByRole('navigation');

    expect(sidebar).toBeTruthy();
  });
});
