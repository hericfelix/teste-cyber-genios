import { createContext, useContext, useEffect, useState } from 'react';
import { ICar, PaginateContextData, ProviderProps } from '../../ts/interfaces';
import { timeoutPromise } from '../../utils';
import { useCars } from '../cars';

const PaginateContext = createContext<PaginateContextData>(
  {} as PaginateContextData
);

export const PaginateProvider = ({ children }: ProviderProps) => {
  const { cars } = useCars();

  const [paginatedCars, setPaginatedCars] = useState<ICar[]>([]);

  const [canLoadMoreCars, setCanLoadMoreCars] = useState<boolean>(true);

  useEffect(() => {
    const slicedCars = cars.slice(0, 5);

    setPaginatedCars(slicedCars);

    if (slicedCars.length === cars.length) {
      setCanLoadMoreCars(false);
    } else {
      setCanLoadMoreCars(true);
    }
  }, [cars]);

  const handleLoadMoreCars = async () => {
    const slicedCars = cars.slice(0, paginatedCars.length + 5);

    await timeoutPromise();

    setPaginatedCars(slicedCars);
    if (slicedCars.length === cars.length) {
      setCanLoadMoreCars(false);
    }
  };

  return (
    <PaginateContext.Provider
      value={{
        canLoadMoreCars,
        handleLoadMoreCars,
        paginatedCars,
      }}
    >
      {children}
    </PaginateContext.Provider>
  );
};

export const usePaginate = () => useContext(PaginateContext);
