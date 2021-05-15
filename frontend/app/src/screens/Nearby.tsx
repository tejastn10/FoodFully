import React, { useEffect } from "react";
import { Alert, FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { View, Text } from "../components/Themed";
import useAuth from "../hooks/useAuth";
import { NearbyState } from "../store/@types";
import { nearbyHotelRequest, nearbyNGORequest } from "../store/actions/actions";
import { ApplicationState } from "../store/store";
import Icon from "react-native-vector-icons/MaterialIcons";

const Nearby = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const nearbyState = useSelector<ApplicationState, NearbyState>(
    (state) => state.nearby
  );
  const { isLoading, errors, nearbyUsers } = nearbyState;

  useEffect(() => {
    if (nearbyUsers === null || nearbyUsers.length === 0) {
      if (user?.isNgo) {
        dispatch(nearbyHotelRequest());
      } else {
        dispatch(nearbyNGORequest());
      }
    }
  }, [dispatch, user?.isNgo, nearbyUsers]);

  useEffect(() => {
    if (errors.results) {
      Alert.alert("Error", errors.results?.message);
    }
  }, [errors.results]);

  return isLoading || nearbyUsers === null || nearbyUsers.length === 0 ? (
    <Text>Loading</Text>
  ) : (
    <View>
      <FlatList
        keyExtractor={(u) => u._id}
        data={nearbyUsers}
        renderItem={(u) => {
          // return <Text>{u.item.name}</Text>;
          return (
            <View style={styles.box}>
              <Text style={{ fontSize: 28, fontWeight: "bold" }}>
                {u.item.name}
              </Text>
              <Text style={{ fontSize: 20 }}>
                <Icon name="mail" size={15} /> {u.item.email}
              </Text>
              <Text style={{ fontSize: 18 }}>
                <Icon name="call" size={15} /> {u.item.contact}
              </Text>
              <Text style={{ fontSize: 18 }}>
                <Icon name="location-on" size={15} />
                {u.item.address.street}, {u.item.address.city},{" "}
                {u.item.address.state} - {u.item.address.pincode}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Nearby;

const styles = StyleSheet.create({
  box: {
    padding: 20,
    justifyContent: "space-evenly",
    height: 200,
  },
});
