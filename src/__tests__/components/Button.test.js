import React from 'react';
import { render, screen } from '@testing-library/react';
import { theme } from '../../style/theme';
import { ThemeProvider } from 'styled-components';
import Button from '../../components/Button';
import userEvent from '@testing-library/user-event';

describe('Button component tests', () => {
  test('should be able to render an button', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button
          background="black"
          border="black"
          color="white"
          fontSize="small"
          padding="small"
          variant="rounded"
        >
          Button
        </Button>
      </ThemeProvider>
    );

    const button = screen.getByText('Button');

    expect(button).toBeTruthy();
  });

  test('should be able to render an button and run onClick function', () => {
    const mockOnClick = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <Button
          background="black"
          border="black"
          color="white"
          fontSize="small"
          padding="small"
          variant="rounded"
          onClick={mockOnClick}
        >
          Button
        </Button>
      </ThemeProvider>
    );

    const button = screen.getByText('Button');
    userEvent.click(button);

    expect(button).toBeTruthy();
    expect(mockOnClick).toBeCalledTimes(1);
  });
});
