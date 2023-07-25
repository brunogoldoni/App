import React from "react";

import * as S from "./styles";
import { IButtonProps } from "./types";

function Button({ title, type = "PRIMARY", ...props }: IButtonProps) {
  return (
    <S.Container type={type} {...props} testID='button-container'>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}

export default Button;
