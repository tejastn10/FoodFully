import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Register: undefined;
  Root: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Nearby: undefined;
  Profile: undefined;
  History: undefined;
};

export type HomeParamList = {
  HomeScreen: undefined;
};

export type NearbyParamList = {
  NearbyScreen: undefined;
};

export type ProfileParamList = {
  ProfileScreen: undefined;
};

export type HistoryParamList = {
  HistoryScreen: undefined;
};

export type RouteStackParamList<T extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
};
