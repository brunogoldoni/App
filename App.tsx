import React from 'react';
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";

import { LoadingContainer } from "@screens/styles";

import { Loading } from "@components/index";

import { Routes } from "./src/routes";

import theme from "./src/theme";

function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      {fontsLoaded ? (
        <Routes />
      ) : (
        <LoadingContainer>
          <Loading color={theme.COLORS.GREEN} size="large" />
        </LoadingContainer>
      )}
    </ThemeProvider>
  );
}

export default App;
