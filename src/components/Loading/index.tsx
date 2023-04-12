import React from 'react';

import { ILoading } from './types';

import * as S from './styles';

const Loading  = ({ color, size }: ILoading) => {
  return (
    <S.Container>
      <S.LoadIndicator color={color} size={size}/>
    </S.Container>
  );
}

export default Loading;