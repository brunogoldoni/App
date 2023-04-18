import styled from "styled-components/native";

export const Header = styled.View`
  flex: 1;
  justify-content: center;
`;

export const HighlightText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GREEN};
  font-size: ${({ theme }) => theme.FONT_SIZE.S_8}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Body = styled.View`
  flex: 0.8;
  width: 100%;
  align-items: center;
`;

export const MB = styled.View`
  width: 100%;
  margin-bottom: 20%;
`;

export const Footer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;
