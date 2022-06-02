import { createContext, useContext, useState } from 'react';
import { ModalContextData, ProviderProps } from '../../ts/interfaces';

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

export const ModalProvider = ({ children }: ProviderProps) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isAddNewModalOpen, setIsAddNewModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  return (
    <ModalContext.Provider
      value={{
        isAddNewModalOpen,
        isEditModalOpen,
        setIsAddNewModalOpen,
        setIsEditModalOpen,
        isDeleteModalOpen,
        setIsDeleteModalOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
export const useModals = () => useContext(ModalContext);
