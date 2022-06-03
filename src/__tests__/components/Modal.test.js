import React from 'react';
import { render, screen } from '@testing-library/react';
import Modal from '../../components/Modal';

describe('Modal component tests', () => {
  test("should'nt be able to render the Modal", () => {
    const mockSetState = jest.fn();

    render(<Modal role="feed" isOpen={false} setIsOpen={mockSetState} />);
    const modal = screen.queryByTestId('modal');

    expect(modal).not.toBeInTheDocument();
  });

  test('should be able to render the Modal', () => {
    const mockSetState = jest.fn();

    render(<Modal role="feed" isOpen={true} setIsOpen={mockSetState} />);
    const modal = screen.queryByTestId('modal');

    expect(modal).toBeInTheDocument();
  });
});
