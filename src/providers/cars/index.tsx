import { createContext, useContext, useState } from 'react';

import { CarsContextData, ICar, ProviderProps } from '../../ts/interfaces';
import carsDb from '../../utils/db';

const CarsContext = createContext<CarsContextData>({} as CarsContextData);

export const CarsProvider = ({ children }: ProviderProps) => {
  const [selectedCarId, setSelectedCarId] = useState<number>(0);
  const [cars, setCars] = useState<ICar[]>(carsDb);

  return (
    <CarsContext.Provider
      value={{ cars, selectedCarId, setCars, setSelectedCarId }}
    >
      {children}
    </CarsContext.Provider>
  );
};

export const useCars = () => useContext(CarsContext);
