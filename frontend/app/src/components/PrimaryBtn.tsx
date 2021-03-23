import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { Text } from "./Themed";

import { height } from "../constants/Layout";

type Props = {
  onPress: () => void;
  title: string;
};

const PrimaryBtn = ({ onPress, title }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryBtn;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: "100%",
    height: height / 15,
    backgroundColor: "#2196F3",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
