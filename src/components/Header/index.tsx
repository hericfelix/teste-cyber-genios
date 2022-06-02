import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';
import useComponentVisible from '../../hooks';
import SideBar from '../SideBar';
import { Container, Content } from './style';

type Props = {};

const Header = (props: Props) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  return (
    <div ref={ref}>
      <Container>
        <Icon
          color={'#fff'}
          fontSize={32}
          onClick={() => setIsComponentVisible(true)}
          icon="ant-design:menu-outlined"
        />
        <Content>
          <li>
            <h1>
              <Icon
                color={'#fff'}
                fontSize={48.75}
                icon="carbon:logo-delicious"
              />
            </h1>
          </li>
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
          <li>
            <Link to="/">Entrar</Link>
            <Icon
              color={'#fff'}
              fontSize={24}
              icon="ant-design:user-outlined"
            />
          </li>
        </Content>
      </Container>
      <SideBar isShown={isComponentVisible} />
    </div>
  );
};

export default Header;
