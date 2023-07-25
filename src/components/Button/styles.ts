import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { IButtonProps } from "./types";

export const Container = styled(TouchableOpacity) <IButtonProps>`
  flex: 1;
  width: 100%;
  min-height: 56px;
  max-height: 56px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS?.GREEN : theme.COLORS?.BLUE};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS?.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE?.S_10}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
