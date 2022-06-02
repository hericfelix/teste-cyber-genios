import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './style';

interface SideBarProps {
  isShown: boolean;
  location: string;
}

const SideBar = ({ isShown, location }: SideBarProps) => {
  return (
    <Container location={location} isShown={isShown}>
      <h1>
        <Icon height={48.75} width={48.75} icon="carbon:logo-delicious" />
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Fale Conosco</Link>
        </li>
        <li>
          <Link to="/">Sobre</Link>
        </li>
        <li>
          <Link to="/table">Tabela</Link>
        </li>
      </ul>
    </Container>
  );
};

export default SideBar;
