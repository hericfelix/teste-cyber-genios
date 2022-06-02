import React, { Dispatch, SetStateAction } from 'react';
import { useCars } from '../../providers/cars';
import Button from '../Button';
import { Container } from './style';

interface DeleteModalProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const DeleteModal = ({ setIsOpen }: DeleteModalProps) => {
  const { selectedCarId, cars, setCars } = useCars();
  const deleteCar = () => {
    const filteredCars = cars.filter((el) => el.id !== selectedCarId);

    setCars(filteredCars);
    setIsOpen(false);
  };

  return (
    <Container>
      <p>Tem certeza?</p>

      <Button
        background="black"
        border="black"
        color="white"
        fontSize="small"
        padding="medium"
        variant="rounded"
        onClick={deleteCar}
      >
        Deletar
      </Button>
      <Button
        background="transparent"
        border="none"
        color="black"
        fontSize="small"
        padding="small"
        variant="rounded"
        onClick={() => setIsOpen(false)}
      >
        Cancelar
      </Button>
    </Container>
  );
};

export default DeleteModal;
