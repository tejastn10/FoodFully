import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "../components/Themed";
import Center from "../components/Center";
import { RouteStackParamList } from "../router/types";
import { getFromLocalStorage } from "../utils/api-helper";

const Splash: React.FC<RouteStackParamList<"Splash">> = ({
  navigation,
}: RouteStackParamList<"Splash">) => {
  const isAuth = getFromLocalStorage("user") ? true : false;

  setTimeout(() => {
    navigation.replace(isAuth ? "Root" : "Login");
  }, 3000);

  return (
    <Center>
      <Text style={styles.heading}>FoodFully</Text>
    </Center>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    fontWeight: "bold",
  },
});

export default Splash;
