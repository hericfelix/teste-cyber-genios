import { ProviderProps } from '../ts/interfaces';
import { CarsProvider } from './cars';
import { ModalProvider } from './modals';
import { PaginateProvider } from './paginate';

const Provider = ({ children }: ProviderProps) => {
  return (
    <CarsProvider>
      <PaginateProvider>
        <ModalProvider>{children}</ModalProvider>
      </PaginateProvider>
    </CarsProvider>
  );
};

export default Provider;
