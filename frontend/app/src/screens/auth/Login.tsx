import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";

import { View, Text } from "../../components/Themed";
import { Alert, StyleSheet } from "react-native";
import Center from "../../components/Center";
import PrimaryBtn from "../../components/PrimaryBtn";
import FormInput from "../../components/FormInput";
import SecondaryBtn from "../../components/SecondaryBtn";

import { loginAuthRequest } from "../../store/actions/actions";
import { ApplicationState } from "../../store/store";
import { AuthState } from "../../store/@types";
import { RouteStackParamList } from "../../router/types";

const Login: React.FC<RouteStackParamList<"Login">> = ({
  navigation,
}: RouteStackParamList<"Login">) => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authState = useSelector<ApplicationState, AuthState>(
    (state) => state.authState
  );

  const { isSuccess, errors } = authState;

  useEffect(() => {
    if (user || isSuccess) {
      navigation.replace("Root");
    }
  }, [user, isSuccess]);

  useEffect(() => {
    if (errors.results) {
      Alert.alert("Error", errors.results?.message);
    }
  }, [errors.results]);

  const loginHandler = () => {
    if (email && password.length >= 6) {
      dispatch(loginAuthRequest({ email, password }));
    } else {
      Alert.alert("Error", "Please enter valid values");
    }
  };

  const registerHandler = () => {
    navigation.push("Register");
  };

  return (
    <Center>
      <View style={styles.container}>
        <Text style={styles.heading}>Login</Text>

        <Text style={styles.subheading}>Email</Text>
        <FormInput
          keyboardType="email-address"
          placeholderText=""
          onChange={(val: string) => setEmail(val)}
        />
        <Text style={styles.subheading}>Password</Text>
        <FormInput
          placeholderText=""
          onChange={(val: string) => setPassword(val)}
          secureText
        />
        <View style={styles.btn}>
          <PrimaryBtn onPress={loginHandler} title="Log In" />
        </View>
        <Text style={styles.subheading}>Don't have an Account?</Text>
        <View style={styles.btn}>
          <SecondaryBtn onPress={registerHandler} title="Register" />
        </View>
      </View>
    </Center>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
  },
  heading: {
    alignSelf: "flex-end",
    fontSize: 40,
    fontWeight: "bold",
    paddingBottom: 30,
  },
  subheading: {
    fontSize: 14,
    paddingTop: 10,
  },
  btn: {
    width: 150,
  },
});

export default Login;
