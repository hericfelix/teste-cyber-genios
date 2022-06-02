import { ReactNode } from 'react';

export interface IComponentsDesktopTypography {
  button: {
    mdSize: string;
    smSize: string;
    weight: number;
  };
  p: {
    mdSize: string;
    smSize: string;
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

export interface IComponentsMobileTypography {
  button: {
    mdSize: string;
    smSize: string;
    weight: number;
  };
  p: {
    size: string;
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
    lgPadding: string;
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
  idNum: number;
  setIdNum: React.Dispatch<React.SetStateAction<number>>;
}

export interface PaginateContextData {
  paginatedCars: ICar[];
  handleLoadMoreCars: () => Promise<void>;
  canLoadMoreCars: boolean;
}

export interface ModalContextData {
  isEditModalOpen: boolean;
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isAddNewModalOpen: boolean;
  setIsAddNewModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isDeleteModalOpen: boolean;
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
