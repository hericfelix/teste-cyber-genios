import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from '../../components/Input';
import { theme } from '../../style/theme';
import { ThemeProvider } from 'styled-components';
import userEvent from '@testing-library/user-event';

describe('Input component tests', () => {
  test('should be able to render an input', () => {
    const mockRegister = jest.fn();
    mockRegister.mockReturnValue({
      ref: { current: 'input' },
    });
    render(
      <ThemeProvider theme={theme}>
        <Input
          label="Input"
          name="Input"
          register={mockRegister}
          placeholder="Input"
        />
      </ThemeProvider>
    );

    const input = screen.getByPlaceholderText('Input');

    expect(input).toBeTruthy();
  });

  test('should be able to render an input and change value', () => {
    const mockRegister = jest.fn();
    mockRegister.mockReturnValue({
      ref: { current: 'input' },
    });
    render(
      <ThemeProvider theme={theme}>
        <Input
          label="Input"
          name="Input"
          register={mockRegister}
          placeholder="Input"
        />
      </ThemeProvider>
    );

    const input = screen.getByPlaceholderText('Input');

    userEvent.type(input, 'input test');

    expect(input).toHaveValue('input test');
  });

  test("should be able to render an input and don't change value due to wrong type", () => {
    const mockRegister = jest.fn();
    mockRegister.mockReturnValue({
      ref: { current: 'input' },
    });
    render(
      <ThemeProvider theme={theme}>
        <Input
          label="Input"
          name="Input"
          register={mockRegister}
          placeholder="Input"
          type="number"
        />
      </ThemeProvider>
    );

    const input = screen.getByPlaceholderText('Input');

    userEvent.type(input, 'input test');

    expect(input).toHaveValue(null);
  });
});
