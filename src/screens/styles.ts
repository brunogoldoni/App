import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 16px;
  background-color: ${({ theme }) => theme.COLORS.BACK_GROUND};
`;

export const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BACK_GROUND};
`;

export const Title = styled.Text`
  line-height: 32px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.COLORS.GREEN};
  font-size: ${({ theme }) => theme.FONT_SIZE.S_14}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const SubTitle = styled.Text`
  width: 90%;
  line-height: 24px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.S_8}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
