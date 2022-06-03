import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { Icon } from '@iconify/react';
import {
  ButtonsContainer,
  Container,
  ImageContainer,
  InputContainer,
  StyledForm,
} from './style';
import Placeholder from '../../assets/placeholder.png';
import Input from '../Input';
import Button from '../Button';
import { ICar } from '../../ts/interfaces';
import { FieldValues, useForm } from 'react-hook-form';

interface FormProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  car?: ICar;
  onSubmit: (data: FieldValues) => void;
}

/* the car parameter is supposed to be used in the editing functionality, to show the existing car values in the inputs*/

const Form = ({ setIsOpen, car, onSubmit }: FormProps) => {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [preview, setPreview] = useState<string>(car ? car.img : Placeholder);

  useEffect(() => {
    if (!selectedFile) {
      setPreview(Placeholder);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  const { register, handleSubmit } = useForm();

  return (
    <Container>
      <div>
        <h3>Adicionar Novo</h3>{' '}
        <Icon
          fontSize={22}
          onClick={() => setIsOpen(false)}
          icon="ant-design:close-circle-outlined"
        />
      </div>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <ImageContainer>
          <img src={preview} alt="preview" />
          <label htmlFor="imgUpload">Selecionar imagem</label>
          <input
            type="file"
            id="imgUpload"
            {...register('img', {
              onChange: (e) => {
                handleFileSelect(e);
              },
            })}
            required={car ? false : true}
          />
        </ImageContainer>
        <InputContainer>
          <Input
            required
            label="Nome"
            defaultValue={car ? car.name : ''}
            placeholder=""
            register={register}
            name="name"
          />
          <Input
            required
            label="Ano"
            defaultValue={car ? car.launchYear : ''}
            placeholder=""
            register={register}
            name="launchYear"
            type="number"
            max={2022}
            min={0}
          />
          <Input
            required
            defaultValue={car ? car.maxSpeed : ''}
            label="Velocidade máxima Km/h"
            placeholder=""
            register={register}
            name="maxSpeed"
            type="number"
          />
          <Input
            required
            label="Nota economia"
            defaultValue={car ? car.economyRating : ''}
            placeholder=""
            register={register}
            name="economyRating"
            type="number"
            max={10}
            min={0}
          />
          <Input
            required
            label="Nota usuários"
            defaultValue={car ? car.userRating : ''}
            placeholder=""
            register={register}
            name="userRating"
            type="number"
            max={10}
            min={0}
          />
          <Input
            required
            label="Link produto"
            defaultValue={''}
            placeholder=""
            register={register}
            name="link"
          />
        </InputContainer>
        <ButtonsContainer>
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
          <Button
            background="black"
            border="black"
            color="white"
            fontSize="small"
            padding="medium"
            variant="rounded"
            type="submit"
          >
            <Icon icon="carbon:add" fontSize={20} /> Adicionar Novo
          </Button>
        </ButtonsContainer>
      </StyledForm>
    </Container>
  );
};

export default Form;
