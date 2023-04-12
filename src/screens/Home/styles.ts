import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Title = styled.Text`
  font-weight: bold;
  line-height: 32px;
  font-size: ${({ theme }) => theme.FONT_SIZE.S_14}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
