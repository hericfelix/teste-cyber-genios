import { Icon } from '@iconify/react';
import React from 'react';
import useComponentVisible from '../../hooks';
import SideBar from '../SideBar';
import { Container } from './style';

type Props = {};

const Header = (props: Props) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  console.log(isComponentVisible);
  return (
    <div ref={ref}>
      <Container>
        <Icon
          onClick={() => setIsComponentVisible(true)}
          icon="ant-design:menu-outlined"
        />
      </Container>
      <SideBar isShown={isComponentVisible} />
    </div>
  );
};

export default Header;
