import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, Login } from '@screens/index';

const { Navigator, Screen } = createNativeStackNavigator();

export function  AppRoutes() {
  return (
    <Navigator>
      <Screen
        name="home"
        component={Home}
      />

      <Screen
        name="login"
        component={Login}
      />
    </Navigator>
  )
};
