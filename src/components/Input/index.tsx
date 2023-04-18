import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import * as S from "./styles";

function Input({ ...props }: TextInputProps) {
  const { COLORS } = useTheme();

  return <S.Container {...props} placeholderTextColor={COLORS.GRAY_100} />;
}

export default Input;
