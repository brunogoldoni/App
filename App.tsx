import { StatusBar, ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, Roboto_900Black } from '@expo-google-fonts/roboto';

import theme from './src/theme';

import { Routes } from './src/routes';

import { WrapperActivityIndicator } from '@screens/styles'

const App = () => {
 const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, Roboto_900Black});

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      {fontsLoaded ? <Routes /> : <WrapperActivityIndicator><ActivityIndicator /></WrapperActivityIndicator>}
    </ThemeProvider>
  );
}

export default App;
