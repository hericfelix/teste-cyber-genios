import { Icon } from '@iconify/react';
import React from 'react';
import { ICar } from '../../ts/interfaces';
import Button from '../Button';
import { CarInfo, Container } from './style';

interface CarCardProps {
  car: ICar;
}

const CarCard = ({ car }: CarCardProps) => {
  return (
    <Container>
      <img src={car.img} alt={car.name} />
      <h2>{car.name}</h2>
      <CarInfo>
        <div>
          <Icon icon="bi:calendar2-date" />
          <p>{car.launchYear}</p>
        </div>
        <div>
          <Icon icon="fluent:top-speed-20-regular" />
          <p>{car.maxSpeed} Km/h</p>
        </div>
        <div>
          <Icon icon="simple-line-icons:energy" />
          <p>{car.economyRating}/10</p>
        </div>
        <div>
          <Icon icon="fluent:people-20-regular" />
          <p>{car.userRating}/10</p>
        </div>
      </CarInfo>
      <Button
        border="black"
        padding="medium"
        fontSize="small"
        color="black"
        background="transparent"
        variant="rounded"
      >
        Ver carro
      </Button>
    </Container>
  );
};

export default CarCard;
