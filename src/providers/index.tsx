import { ProviderProps } from '../ts/interfaces';
import { CarsProvider } from './cars';
import { PaginateProvider } from './paginate';

const Provider = ({ children }: ProviderProps) => {
  return (
    <CarsProvider>
      <PaginateProvider>{children}</PaginateProvider>
    </CarsProvider>
  );
};

export default Provider;
