import React, { useEffect, useState } from "react";
import {
  Alert,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  RefreshControl,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { View, Text } from "../components/Themed";
import useAuth from "../hooks/useAuth";
import { NearbyState } from "../store/@types";
import { nearbyHotelRequest, nearbyNGORequest } from "../store/actions/actions";
import { ApplicationState } from "../store/store";
import Icon from "react-native-vector-icons/MaterialIcons";
import Center from "../components/Center";

const Nearby = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [refreshing, setRefreshing] = useState(false);

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
    setRefreshing(false);
  }, [dispatch, user?.isNgo, nearbyUsers]);

  useEffect(() => {
    if (errors.results) {
      Alert.alert("Error", errors.results?.message);
    }
  }, [errors.results]);

  const onRefresh = () => {
    setRefreshing(true);
    if (user?.isNgo) {
      dispatch(nearbyHotelRequest());
    } else {
      dispatch(nearbyNGORequest());
    }
  };

  return isLoading || nearbyUsers === null || nearbyUsers.length === 0 ? (
    <Center>
      <ActivityIndicator size={40} color="#2f95dc" />
    </Center>
  ) : (
    <View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        keyExtractor={(u) => u._id}
        data={nearbyUsers}
        renderItem={(u) => {
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
