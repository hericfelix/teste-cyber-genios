import React from 'react';
import { render, screen } from '@testing-library/react';
import { theme } from '../../style/theme';
import { ThemeProvider } from 'styled-components';
import CarCard from '../../components/CarCard';

describe('CarCard component tests', () => {
  test('should be able to render a CarCard', () => {
    const carMock = {
      id: 0,
      launchYear: 2018,
      name: 'Mustang',
      economyRating: 9,
      img: './images/image 11.png',
      maxSpeed: 180,
      userRating: 9,
    };

    render(
      <ThemeProvider theme={theme}>
        <CarCard car={carMock} />
      </ThemeProvider>
    );

    const card = screen.getByText(carMock.name);

    expect(card).toBeTruthy();
  });
});
