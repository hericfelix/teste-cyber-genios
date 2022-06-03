import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import Button from '../../components/Button';
import DeleteModal from '../../components/DeleteModal';
import Form from '../../components/Form';
import Modal from '../../components/Modal';
import Table from '../../components/Table';
import { useCars } from '../../providers/cars';
import { useModals } from '../../providers/modals';
import { ICar } from '../../ts/interfaces';
import { Container } from './style';

const TablePage = () => {
  const { cars, setCars, selectedCarId, idNum, setIdNum } = useCars();
  const {
    isAddNewModalOpen,
    isEditModalOpen,
    setIsAddNewModalOpen,
    setIsEditModalOpen,
    isDeleteModalOpen,
    setIsDeleteModalOpen,
  } = useModals();

  const editCarSubmit = (data: FieldValues) => {
    const car = cars.find((el) => el.id === selectedCarId) as ICar;

    const { img, link, ...rest } = data;

    if (img[0]) {
      rest.img = URL.createObjectURL(data.img[0]);
    }
    Object.assign(car, rest);
    setCars([...cars]);
    setIsEditModalOpen(false);
  };

  const addCarSubmit = (data: FieldValues) => {
    const { link, ...rest } = data;
    rest.id = idNum;
    rest.img = URL.createObjectURL(data.img[0]);
    setIdNum(idNum + 1);
    setCars([...cars, rest as ICar]);
    setIsAddNewModalOpen(false);
  };

  return (
    <>
      <Container>
        <div>
          <h2>Lista</h2>
          <Button
            background="transparent"
            border="black"
            color="black"
            fontSize="small"
            padding="small"
            variant="rounded"
            onClick={() => setIsAddNewModalOpen(true)}
          >
            <Icon icon="carbon:add" />
            Adicionar Novo
          </Button>
        </div>
        <Table />
      </Container>
      <Modal isOpen={isAddNewModalOpen} setIsOpen={setIsAddNewModalOpen}>
        <Form onSubmit={addCarSubmit} setIsOpen={setIsAddNewModalOpen} />
      </Modal>
      <Modal isOpen={isEditModalOpen} setIsOpen={setIsEditModalOpen}>
        <Form
          car={cars.find((el) => el.id === selectedCarId)}
          onSubmit={editCarSubmit}
          setIsOpen={setIsEditModalOpen}
        />
      </Modal>
      <Modal isOpen={isDeleteModalOpen} setIsOpen={setIsDeleteModalOpen}>
        <DeleteModal setIsOpen={setIsDeleteModalOpen} />
      </Modal>
    </>
  );
};

export default TablePage;
