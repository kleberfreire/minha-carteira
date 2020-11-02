import React, {useMemo, useState} from 'react';

import { Container, Welcome, UserName, Profile } from './styles';

import Toggle from '../Toogle'
import Emojis from '../../utils/emojis'

const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * Emojis.length)
    return Emojis[indice]

  }, [])
 
  return (
    <Container>
      <Toggle />
      <Profile>
  <Welcome>Ola,{ emoji }</Welcome>
        <UserName>Kleber Freire</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
