import { ArrowRight } from "phosphor-react-native";
import styled from "styled-components/native";

export const Content = styled.View`
  flex: 1;
  align-items: flex-start;
`;

export const WrapperTitle = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  margin-top: 20%;

  color: ${({ theme }) => theme.COLORS.WHITE};

  font-weight: bold;
  line-height: 32px;
  font-size: ${({ theme }) => theme.FONT_SIZE.S_16}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BLACK};
`;

export const IncTitle = styled(Title)`
  margin-left: 4px;
  color: ${({ theme }) => theme.COLORS.GREEN};
`;

export const SubTitle = styled.Text`
  width: 90%;
  margin-top: 1%;
  
  font-weight: bold;
  line-height: 24px;
  color: ${({ theme }) => theme.COLORS.WHITE}
  font-size: ${({ theme }) => theme.FONT_SIZE.S_11}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
`;

export const Description = styled.Text`
  width: 80%;
  margin-top: 60%;
  
  font-weight: bold;
  line-height: 32px;
  color: ${({ theme }) => theme.COLORS.WHITE}
  font-size: ${({ theme }) => theme.FONT_SIZE.S_16}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
`;

export const Footer = styled.View`
  padding: 4px;
  align-items: flex-end;
`;

export const Button = styled.TouchableOpacity.attrs({})``;

export const ArrowIcon = styled(ArrowRight).attrs(({ theme }) => ({
  size: 56,
  marginRight: 16,
  color: theme.COLORS.GREEN,
}))``;
