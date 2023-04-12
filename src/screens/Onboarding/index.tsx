import React from 'react';

import { INavigation } from '@screens/types';

import * as S from './styles';

const Onboarding = ({ navigation }: INavigation) => {
  function handleNavigate() {
    navigation.navigate('login')
  };

  return (
    <S.Container>
        <S.Content>
          <S.WrapperTitle>
            <S.Title>Generation</S.Title>
            <S.IncTitle>Inc.</S.IncTitle>
          </S.WrapperTitle>

          <S.SubTitle>seu App de informações pessoais.</S.SubTitle>

          <S.Description>Aqui você encontra informativos diários de acordo com sua necessidade.</S.Description>
        </S.Content>

        <S.Footer>
          <S.Button onPress={handleNavigate}>
            <S.ArrowIcon />
          </S.Button>
        </S.Footer>
    </S.Container>
  );
}

export default Onboarding;
