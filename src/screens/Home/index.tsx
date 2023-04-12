import React from 'react';

import { INavigation } from '@screens/types';

import * as S from '../styles';

const Home = ({ navigation }: INavigation) => {
  function handleNavigation() {
    navigation.navigate('login');
  };

  return (
  <S.Container>
    <S.Title>Home Screen</S.Title>

    <S.Button  
      onPress={handleNavigation}
    >
      <S.ButtonTitle>
        Login
      </S.ButtonTitle>
    </S.Button>
  </S.Container>
  );
}

export default Home;
