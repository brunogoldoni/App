import { ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, Roboto_900Black } from '@expo-google-fonts/roboto';

import theme from './src/theme';

import { Home } from '@screens/Home';
import { WrapperActivityIndicator } from '@screens/styles'

export default function App() {
 const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, Roboto_900Black});

  return (
  <ThemeProvider theme={theme}>
    {fontsLoaded ? <Home /> : <WrapperActivityIndicator><ActivityIndicator /></WrapperActivityIndicator>}
  </ThemeProvider>
  );
}
