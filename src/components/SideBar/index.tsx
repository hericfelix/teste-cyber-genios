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
      <Icon icon="carbon:logo-delicious" />
      <ul>
        <Link to="/">Home</Link>
        <Link to="/">Fale Conosco</Link>
        <Link to="/">Sobre</Link>
        <Link to="/">Tabela</Link>
      </ul>
    </Container>
  );
};

export default SideBar;
