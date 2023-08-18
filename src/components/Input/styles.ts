import styled from 'styled-components/native';

import { TextInput } from "react-native";

export const Container = styled(TextInput)`
  width: 100%;
  padding: 16px;
  min-height: 56px;
  max-height: 56px;
  border-radius: 8px;
  margin-bottom: 16px;
  text-transform: lowercase;
  color: ${({ theme }: any) => theme.COLORS?.WHITE};
  font-size: ${({ theme }: any) => theme.FONT_SIZE?.S_10}px;
  font-family: ${({ theme }: any) => theme.FONT_FAMILY?.REGULAR};
  /* background-color: ${({ theme }: any) => theme.COLORS?.GRAY_200}; */
`;
