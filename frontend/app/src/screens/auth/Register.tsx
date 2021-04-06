import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";

import { View, Text } from "../../components/Themed";
import { Alert, ScrollView, StyleSheet, Switch } from "react-native";
import Center from "../../components/Center";
import PrimaryBtn from "../../components/PrimaryBtn";
import FormInput from "../../components/FormInput";
import SecondaryBtn from "../../components/SecondaryBtn";

import { registerAuthRequest } from "../../store/actions/actions";
import { ApplicationState } from "../../store/store";
import { AuthState } from "../../store/@types";
import { RouteStackParamList } from "../../router/types";

const Register: React.FC<RouteStackParamList<"Login">> = ({
  navigation,
}: RouteStackParamList<"Login">) => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [contact, setContact] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");

  const [isNgo, setIsNgo] = useState(false);
  const toggleSwitch = () => setIsNgo((previousState) => !previousState);

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

  const registerHandler = () => {
    if (
      name &&
      email &&
      password &&
      contact &&
      street &&
      city &&
      pincode &&
      state
    ) {
      if (password == cpassword && password.length >= 6) {
        dispatch(
          registerAuthRequest({
            name,
            email,
            password,
            contact,
            isNgo,
            street,
            city,
            pincode,
            state,
          })
        );
      } else {
        Alert.alert("Error", "Please enter valid values");
      }
    } else {
      Alert.alert("Error", "Please enter valid values");
    }
  };

  const loginHandler = () => {
    navigation.pop();
  };

  return (
    <ScrollView>
      <Center>
        <View style={styles.container}>
          <Text style={styles.heading}>Register</Text>

          <Text style={styles.subheading}>Name</Text>
          <FormInput
            placeholderText=""
            onChange={(val: string) => setName(val)}
          />
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
          <Text style={styles.subheading}>Confirm Password</Text>
          <FormInput
            placeholderText=""
            onChange={(val: string) => setCPassword(val)}
            secureText
          />
          <Text style={styles.subheading}>Mobile Number</Text>
          <FormInput
            placeholderText=""
            onChange={(val: string) => setContact(val)}
          />
          <Text style={styles.subheading}>Street</Text>
          <FormInput
            placeholderText=""
            onChange={(val: string) => setStreet(val)}
          />
          <Text style={styles.subheading}>City</Text>
          <FormInput
            placeholderText=""
            onChange={(val: string) => setCity(val)}
          />
          <Text style={styles.subheading}>Pincode</Text>
          <FormInput
            placeholderText=""
            onChange={(val: string) => setPincode(val)}
          />
          <Text style={styles.subheading}>State</Text>
          <FormInput
            placeholderText=""
            onChange={(val: string) => setState(val)}
          />
          <View style={styles.switch}>
            <Text style={styles.subheading}>Are you a NGO?</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={"#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              style={{ marginTop: 7 }}
              value={isNgo}
            />
          </View>
          <View style={styles.btn}>
            <PrimaryBtn onPress={registerHandler} title="Register" />
          </View>
          <Text style={styles.subheading}>Already have an Account?</Text>
          <View style={styles.btn}>
            <SecondaryBtn onPress={loginHandler} title="Log In" />
          </View>
        </View>
      </Center>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
  },
  heading: {
    alignSelf: "flex-start",
    fontSize: 40,
    fontWeight: "bold",
    paddingBottom: 30,
    marginTop: 120,
  },
  subheading: {
    fontSize: 14,
    paddingTop: 10,
  },
  btn: {
    width: 150,
  },
  switch: {
    width: "100%",
    flexDirection: "row",
    paddingBottom: 20,
  },
});

export default Register;
