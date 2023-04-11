import React from 'react';

import { INavigation } from './types';

import * as S from '../styles';

const Login = ({ navigation }: INavigation) => {
  function handleNavigation() {
    navigation.navigate('home');
  };

  return (
    <S.Container>
      <S.Title>Login Screen</S.Title>

      <S.Button  
      onPress={handleNavigation}
    >
      <S.ButtonTitle>
        Home
      </S.ButtonTitle>
    </S.Button>
    </S.Container>
  );
}

export default Login;
