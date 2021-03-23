import React from "react";
import { StyleSheet } from "react-native";

import { View } from "./Themed";

const Center = ({ children }: { children: React.ReactNode }) => {
  return <View style={styles.center}>{children}</View>;
};

export default Center;

const styles = StyleSheet.create({
  center: {
    padding: 25,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
