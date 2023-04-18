import {Button, Input} from "@components/index";
import { INavigation } from "@screens/types";

import * as GS from "../styles";
import * as S from "./styles";

function Login({ navigation }: INavigation) {
  function handleNavigation() {
    navigation.navigate("home");
  }

  return (
    <GS.Container>
      <S.Header>
        <GS.Title>Login</GS.Title>
        <GS.SubTitle>
          realize seu cadastro para ter acesso a todas funcionalidades do nosso{" "}
          <S.HighlightText>App</S.HighlightText>.
        </GS.SubTitle>
      </S.Header>

      <S.Body>
        <S.MB>
          <Input placeholder="Digite seu email" />
        </S.MB>

        <Input placeholder="Digite sua senha" />
      </S.Body>

      <S.Footer>
        <Button title="Entrar" onPress={handleNavigation} />
      </S.Footer>
    </GS.Container>
  );
}

export default Login;
