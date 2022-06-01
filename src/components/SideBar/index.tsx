import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './style';

interface SideBarProps {
  isShown: boolean;
}

const SideBar = ({ isShown }: SideBarProps) => {
  console.log(isShown);
  return (
    <Container isShown={isShown}>
      <Icon height={48.75} width={48.75} icon="carbon:logo-delicious" />
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
          <Link to="/">Tabela</Link>
        </li>
      </ul>
    </Container>
  );
};

export default SideBar;
