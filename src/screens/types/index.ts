import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootParamList = {
  home: undefined;
  login: undefined;
};

export interface INavigation {
  navigation: NativeStackNavigationProp<RootParamList, "login">;
}
