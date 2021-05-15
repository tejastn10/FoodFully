import React from "react";
import { KeyboardTypeOptions, View, StyleSheet } from "react-native";
import { TextInput } from "./Themed";

import { height } from "../constants/Layout";

type Props = {
  placeholderText: string;
  labelValue?: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  secureText?: boolean;
  numberOfLines?: number;
  onChange: (val: string) => void;
};

const FormInput = ({
  placeholderText,
  labelValue,
  keyboardType = "default",
  secureText = false,
  onChange,
  numberOfLines = 1,
}: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChange}
        style={styles.input}
        value={labelValue}
        secureTextEntry={secureText}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        numberOfLines={numberOfLines}
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType={keyboardType}
      ></TextInput>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: 10,
    width: "100%",
    height: height / 15,
    borderColor: "#ccc",
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  icon: {
    padding: 10,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRightColor: "#ccc",
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    fontFamily: "Lato-Regular",
    // color: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
});
