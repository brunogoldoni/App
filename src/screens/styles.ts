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
  background-color: ${({ theme }: any) => theme.COLORS.GRAY_100};
`;

export const Title = styled.Text`
  font-weight: bold;
  line-height: 32px;
  margin-bottom: 80px;
  font-size: ${({ theme }: any) => theme.FONT_SIZE.S_14}px;
  font-family: ${({ theme }: any) => theme.FONT_FAMILY.BOLD};
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
  color: ${({ theme }: any) => theme.COLORS.WHITE};
  font-size: ${({ theme }: any) => theme.FONT_SIZE.S_10}px;
  font-family: ${({ theme }: any) => theme.FONT_FAMILY.BOLD};
`;