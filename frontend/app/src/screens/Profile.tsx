import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, StyleSheet, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Center from "../components/Center";
import FormInput from "../components/FormInput";
import PrimaryBtn from "../components/PrimaryBtn";
import { View, Text } from "../components/Themed";
import { RouteStackParamList } from "../router/types";
import { UserProfileState } from "../store/@types";
import {
  clearNearby,
  getUserProfileRequest,
  logoutUser,
  updateUserProfileRequest,
} from "../store/actions/actions";
import { ApplicationState } from "../store/store";
import Icon from "react-native-vector-icons/MaterialIcons";
import SecondaryBtn from "../components/SecondaryBtn";

const Profile: React.FC<RouteStackParamList<"Root">> = ({
  navigation,
}: RouteStackParamList<"Root">) => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const profileState = useSelector<ApplicationState, UserProfileState>(
    (state) => state.userProfile
  );
  const { profile, isLoading, errors, history } = profileState;

  const logoutHandler = () => {
    dispatch(logoutUser());
    dispatch(clearNearby());
    navigation.replace("Login");
  };

  const updateHandler = () => {
    if (password == cpassword && password.length >= 6) {
      dispatch(updateUserProfileRequest({ password }));
    } else {
      Alert.alert("Error", "Please check your password");
    }
  };

  useEffect(() => {
    if (!profile) {
      dispatch(getUserProfileRequest());
    }
  }, [dispatch, profile]);

  useEffect(() => {
    if (errors.results) {
      Alert.alert("Error", errors.results?.message);
    }
  }, [errors.results]);

  return isLoading || profile === null ? (
    <Center>
      <ActivityIndicator size={40} color="#2f95dc" />
    </Center>
  ) : (
    <View style={styles.container}>
      <Text style={styles.heading}>{profile?.isNgo ? "NGO" : "Hotel"}</Text>
      <Text style={styles.description}>
        <Icon name="person" size={16} /> {profile?.name}
      </Text>
      <Text style={styles.description}>
        <Icon name="mail" size={16} /> {profile?.email}
      </Text>
      <Text style={styles.description}>
        <Icon name="call" size={16} /> {profile?.contact}
      </Text>
      <Text style={styles.description}>
        <Icon name="location-on" size={15} /> {profile?.address.street},{" "}
        {profile?.address.city}, {profile?.address.state} -{" "}
        {profile?.address.pincode}
      </Text>
      <Text style={styles.subheading}>Change Password</Text>
      <FormInput
        placeholderText="Password"
        secureText
        onChange={(val: string) => setPassword(val)}
      />
      <FormInput
        placeholderText="Confirm Password"
        secureText
        onChange={(val: string) => setCPassword(val)}
      />
      <SecondaryBtn title="Change Password" onPress={updateHandler} />
      <PrimaryBtn title="Logout" onPress={logoutHandler} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: "100%",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subheading: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 10,
  },
  description: {
    fontSize: 20,
    marginBottom: 5,
  },
});
