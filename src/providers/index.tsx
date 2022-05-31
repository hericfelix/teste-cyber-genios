import { ProviderProps } from '../ts/interfaces';
import { CarsProvider } from './cars';

const Provider = ({ children }: ProviderProps) => {
  return <CarsProvider>{children}</CarsProvider>;
};

export default Provider;
