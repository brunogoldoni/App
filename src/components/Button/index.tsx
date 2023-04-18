import * as S from "./styles";
import { IButtonProps } from "./types";

function Button({ title, type = "PRIMARY", ...props }: IButtonProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <S.Container type={type} {...props}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}

export default Button;
