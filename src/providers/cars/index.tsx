import { createContext, useContext, useState } from 'react';

import { CarsContextData, ICar, ProviderProps } from '../../ts/interfaces';

const CarsContext = createContext<CarsContextData>({} as CarsContextData);

export const CarsProvider = ({ children }: ProviderProps) => {
  const [selectedCarId, setSelectedCarId] = useState<number>(0);
  const [cars, setCars] = useState<ICar[]>([
    {
      id: 0,
      launchYear: 2018,
      name: 'Mustang',
      economyRating: 9,
      img: './images/image 11.png',
      maxSpeed: 180,
      userRating: 9,
    },
    {
      id: 1,
      launchYear: 2019,
      name: 'Mustang',
      economyRating: 9,
      img: './images/image 24.png',
      maxSpeed: 180,
      userRating: 9,
    },
    {
      id: 2,
      launchYear: 2017,
      name: 'Mustang',
      economyRating: 9,
      img: './images/image 22.png',
      maxSpeed: 180,
      userRating: 9,
    },
    {
      id: 3,
      launchYear: 2011,
      name: 'Mustang',
      economyRating: 9,
      img: './images/image 22.png',
      maxSpeed: 180,
      userRating: 9,
    },
    {
      id: 4,
      launchYear: 2012,
      name: 'Mustang',
      economyRating: 9,
      img: './images/image 23.png',
      maxSpeed: 180,
      userRating: 9,
    },
    {
      id: 5,
      launchYear: 2014,
      name: 'Mustang',
      economyRating: 9,
      img: './images/image 24.png',
      maxSpeed: 180,
      userRating: 9,
    },
    {
      id: 6,
      launchYear: 2016,
      name: 'Mustang',
      economyRating: 9,
      img: './images/image 25.png',
      maxSpeed: 180,
      userRating: 9,
    },
    {
      id: 7,
      launchYear: 2014,
      name: 'Mustang',
      economyRating: 9,
      img: './images/image 22.png',
      maxSpeed: 180,
      userRating: 9,
    },
    {
      id: 8,
      launchYear: 2013,
      name: 'Mustang',
      economyRating: 9,
      img: './images/image 28.png',
      maxSpeed: 180,
      userRating: 9,
    },
    {
      id: 9,
      launchYear: 2014,
      name: 'Mustang',
      economyRating: 9,
      img: './images/image 11.png',
      maxSpeed: 180,
      userRating: 9,
    },
  ]);

  return (
    <CarsContext.Provider
      value={{ cars, selectedCarId, setCars, setSelectedCarId }}
    >
      {children}
    </CarsContext.Provider>
  );
};

export const useCars = () => useContext(CarsContext);
