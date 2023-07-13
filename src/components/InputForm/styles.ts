import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
`;

export const Error = styled.Text`
  font-weight: bold; 
  margin: -20px 0 16px 8px ;
  line-height: ${RFValue(32)}px;
  color: ${({ theme }) => theme.COLORS.ATTENTION};
  font-size: ${({ theme }) => theme.FONT_SIZE.S_8}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
