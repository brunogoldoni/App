import { INavigation } from "@screens/types";

import * as GS from "../styles";
import * as S from "./styles";

function Onboarding({ navigation }: INavigation) {
  function handleNavigate() {
    navigation.navigate("login");
  }

  return (
    <GS.Container>
      <S.Content>
        <S.WrapperTitle>
          <S.Title>Generation</S.Title>
          <S.IncTitle>Inc.</S.IncTitle>
        </S.WrapperTitle>

        <S.SubTitle>
          seu <S.HighlightText>App</S.HighlightText> de informações pessoais.
        </S.SubTitle>

        <S.Description>
          Aqui você encontra informativos diários de acordo com sua necessidade.
        </S.Description>
      </S.Content>

      <S.Footer>
        <S.Button onPress={handleNavigate}>
          <S.ArrowIcon />
        </S.Button>
      </S.Footer>
    </GS.Container>
  );
}

export default Onboarding;
