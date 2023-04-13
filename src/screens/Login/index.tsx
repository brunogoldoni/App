import { INavigation } from "@screens/types";
import React from "react";

import * as S from "../styles";

function Login({ navigation }: INavigation) {
  function handleNavigation() {
    navigation.navigate("home");
  }

  return (
    <S.Container>
      <S.Title>Login Screen</S.Title>

      <S.Button onPress={handleNavigation}>
        <S.ButtonTitle>Home</S.ButtonTitle>
      </S.Button>
    </S.Container>
  );
}

export default Login;
