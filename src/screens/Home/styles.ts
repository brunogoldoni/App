import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }: any) => theme.COLORS.GRAY_100};
`;

export const Title = styled.Text`
  font-weight: bold;
  line-height: 32px;
  font-size: ${({ theme }: any) => theme.FONT_SIZE.S_14}px;
  font-family: ${({ theme }: any) => theme.FONT_FAMILY.BOLD};
`;
