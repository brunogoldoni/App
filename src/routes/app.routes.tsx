import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Onboarding, Home, Login } from '@screens/index';

const { Navigator, Screen } = createNativeStackNavigator();

export function  AppRoutes() {
  return (
    <Navigator>
      <Screen
        options={{
          title: '',
          headerShown: false,
          headerTransparent: true
        }}
        name="onboarding"
        component={Onboarding}
      />
      <Screen
        options={{
          title: '',
          headerShown: false,
          headerTransparent: true
        }}
        name="login"
        component={Login}
      />
      <Screen
        options={{
          title: '',
          headerShown: false,
          headerTransparent: true
        }}
        name="home"
        component={Home}
      />
    </Navigator>
  )
};
