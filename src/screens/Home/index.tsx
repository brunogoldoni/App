import { INavigation } from "@screens/types";
import React from "react";

import * as S from "../styles";

function Home({ navigation }: INavigation) {
  function handleNavigation() {
    navigation.navigate("login");
  }

  return (
    <S.Container>
      <S.Title>Home Screen</S.Title>

      <S.Button onPress={handleNavigation}>
        <S.ButtonTitle>Login</S.ButtonTitle>
      </S.Button>
    </S.Container>
  );
}

export default Home;
