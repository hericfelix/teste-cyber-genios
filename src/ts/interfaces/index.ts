import { ReactNode } from 'react';
import { FieldValues } from 'react-hook-form';

export interface IComponentsTypography {
  button: {
    mdSize: string;
    smSize: string;
    weight: number;
  };
  p: {
    size?: string;
    mdSize?: string;
    smSize?: string;
    mdWeight: number;
    smWeight: number;
  };
  h1: {
    weight: number;
    size: string;
  };
  h2: {
    weight: number;
    size: string;
  };
}

export interface IComponents {
  button: {
    sqBorder: string;
    rdBorder: string;
    smPadding: string;
    mdPadding: string;
  };
  input: {
    border: string;
  };
}

export interface IColors {
  primary: string;
  secondary: string;
  tertiary: string;
  white: string;
}

export interface ICar {
  id: number;
  launchYear: number;
  img: string;
  name: string;
  maxSpeed: number;
  economyRating: number;
  userRating: number;
}

export interface ProviderProps {
  children: ReactNode;
}

export interface CarsContextData {
  cars: ICar[];
  setCars: React.Dispatch<React.SetStateAction<ICar[]>>;
  selectedCarId: number;
  setSelectedCarId: React.Dispatch<React.SetStateAction<number>>;
}

export interface PaginateContextData {
  paginatedCars: ICar[];
  handleLoadMoreCars: () => Promise<void>;
  canLoadMoreCars: boolean;
}
