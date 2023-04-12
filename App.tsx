import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black
} from '@expo-google-fonts/roboto';

import theme from './src/theme';

import { Routes } from './src/routes';

import Loading from '@components/Loading';
import { LoadingContainer } from '@screens/styles';

const App = () => {
 const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      {fontsLoaded ? <Routes /> : 
        <LoadingContainer>
          <Loading color={theme.COLORS.GREEN} size="large" />
        </LoadingContainer>
      }
    </ThemeProvider>
  );
}

export default App;
