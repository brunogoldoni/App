import styled from "styled-components/native";

export const WrapperActivityIndicator = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Title = styled.Text`
  font-weight: bold;
  line-height: 32px;
  margin-bottom: 80px;
  font-size: ${({ theme }) => theme.FONT_SIZE.S_14}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Button = styled.TouchableOpacity.attrs({})`
  align-items: center;
  justify-content: center;

  background-color: #000000;
  border-radius: 8px;
  padding: 8px;
  width: 90%;
`;

export const ButtonTitle = styled.Text`
  font-weight: bold;
  line-height: 32px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.S_10}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;