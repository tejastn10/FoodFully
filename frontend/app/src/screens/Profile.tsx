import React from "react";
import { useDispatch } from "react-redux";
import PrimaryBtn from "../components/PrimaryBtn";
import { View, Text } from "../components/Themed";
import { RouteStackParamList } from "../router/types";
import { clearNearby, logoutUser } from "../store/actions/actions";

const Profile: React.FC<RouteStackParamList<"Root">> = ({
  navigation,
}: RouteStackParamList<"Root">) => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logoutUser());
    dispatch(clearNearby());
    navigation.replace("Login");
  };
  return (
    <View>
      <Text>Profile</Text>
      <PrimaryBtn title="Logout" onPress={logoutHandler} />
    </View>
  );
};

export default Profile;
