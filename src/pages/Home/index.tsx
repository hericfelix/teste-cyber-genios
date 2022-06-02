import React from 'react';
import Button from '../../components/Button';
import CarCard from '../../components/CarCard';
import Carousel from '../../components/Carousel';
import { useCars } from '../../providers/cars';
import {
  Container,
  LowerContainer,
  LowerDesktopContent,
  LowerMobileContent,
} from './style';

type Props = {};

const Home = (props: Props) => {
  const { cars } = useCars();
  return (
    <Container>
      <Carousel>
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </Carousel>
      <LowerContainer>
        <LowerMobileContent>
          <h2>O que são</h2>
          <p>
            A sigla SUV significa Sport Utility Vehicle -- ou seja, veículo
            utilitário esportivo. As SUVs costumam ter porte avantajado, além de
            interior espaçoso e possibilidade de trafegar dentro e fora da
            cidade.
          </p>
          <Button
            background="transparent"
            color="white"
            padding="small"
            fontSize="small"
            variant="square"
            border="white"
          >
            Ver carros
          </Button>
        </LowerMobileContent>
        <LowerDesktopContent>
          <h2>Mustang</h2>
          <p>
            O Ford Mustang é um automóvel desportivo produzido pela Ford Motor
            Company. O carro foi apresentado ao público em 17 de abril de 1964
            durante a New York World's Fair. O Mustang, apesar de ter sofrido
            grandes alterações ao longo dos anos é a mais antiga linha de
            automóveis da Ford.
          </p>
          <Button
            background="transparent"
            color="white"
            padding="large"
            fontSize="small"
            variant="square"
            border="white"
          >
            Ver carros
          </Button>
        </LowerDesktopContent>
      </LowerContainer>
    </Container>
  );
};

export default Home;
