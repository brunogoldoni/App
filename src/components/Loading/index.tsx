import React from "react";

import * as S from "./styles";
import { ILoading } from "./types";

function Loading({ color, size }: ILoading) {
  return (
    <S.Container>
      <S.LoadIndicator color={color} size={size} />
    </S.Container>
  );
}

export default Loading;
