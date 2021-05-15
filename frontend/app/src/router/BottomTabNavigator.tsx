import Icon from "react-native-vector-icons/MaterialIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import Home from "../screens/Home";

import {
  BottomTabParamList,
  HomeParamList,
  NearbyParamList,
  ProfileParamList,
  HistoryParamList,
} from "./types";
import Nearby from "../screens/Nearby";
import Profile from "../screens/Profile";
import History from "../screens/History";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        keyboardHidesTabBar: true,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Nearby"
        component={NearbyNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="location-on" color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="History"
        component={HistoryNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="history" color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Icon>["name"];
  color: string;
}) {
  return <Icon size={30} style={{ marginBottom: -3 }} {...props} />;
}

const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={Home}
        options={{ headerTitle: "Home" }}
      />
    </HomeStack.Navigator>
  );
}
const NearbyStack = createStackNavigator<NearbyParamList>();

function NearbyNavigator() {
  return (
    <NearbyStack.Navigator>
      <NearbyStack.Screen
        name="NearbyScreen"
        component={Nearby}
        options={{ headerTitle: "Nearby" }}
      />
    </NearbyStack.Navigator>
  );
}
const ProfileStack = createStackNavigator<ProfileParamList>();

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={Profile}
        options={{ headerTitle: "Profile" }}
      />
    </ProfileStack.Navigator>
  );
}

const HistoryStack = createStackNavigator<HistoryParamList>();

function HistoryNavigator() {
  return (
    <HistoryStack.Navigator>
      <HistoryStack.Screen
        name="HistoryScreen"
        component={History}
        options={{ headerTitle: "History" }}
      />
    </HistoryStack.Navigator>
  );
}
export default BottomTabNavigator;
