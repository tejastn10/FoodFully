import React, { useEffect } from "react";
import { ActivityIndicator, Alert, FlatList, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Center from "../components/Center";
import { View, Text } from "../components/Themed";
import { UserProfileState } from "../store/@types";
import { getHistoryRequest } from "../store/actions/actions";
import { ApplicationState } from "../store/store";

const History = () => {
  const dispatch = useDispatch();
  const profileState = useSelector<ApplicationState, UserProfileState>(
    (state) => state.userProfile
  );
  const { profile, history, isLoading, errors } = profileState;

  useEffect(() => {
    if (errors.results) {
      Alert.alert("Error", errors.results?.message);
    }
  }, [errors.results]);

  useEffect(() => {
    if (!history || history.length === 0) {
      dispatch(getHistoryRequest());
    }
  }, [dispatch, history]);

  return isLoading || history === null || history.length === 0 ? (
    <Center>
      <ActivityIndicator size={40} color="#2f95dc" />
    </Center>
  ) : profile?.isNgo ? (
    <View>
      <FlatList
        keyExtractor={(h) => h._id}
        data={history as any}
        renderItem={(h) => {
          return (
            <View style={styles.box}>
              <Text style={styles.subHeading}>Order ID: {h.item._id}</Text>
              <Text style={styles.heading}>Hotel: {h.item.hotel.name}</Text>
              <Text style={styles.midHeading}>
                Quantity: {h.item.donation.quantity}
              </Text>
              <Text style={styles.midHeading}>
                Description: {h.item.donation.description}
              </Text>
              <Text style={styles.subHeading}>
                {h.item.delivered ? "Delivered" : "Not Delivered"}
              </Text>
              <Text style={styles.subHeading}>
                Delivered On:{" "}
                {h.item.delivered
                  ? h.item.deliveredOn.substring(0, 10)
                  : "yet to be delivered"}
              </Text>
            </View>
          );
        }}
      ></FlatList>
    </View>
  ) : (
    <View>
      <FlatList
        keyExtractor={(h) => h._id}
        data={history as any}
        renderItem={(h) => {
          return (
            <View style={styles.box}>
              <Text style={styles.subHeading}>Donation ID: {h.item._id}</Text>
              <Text style={styles.heading}>Quantity: {h.item.quantity}</Text>
              <Text style={styles.heading}>
                Description: {h.item.description}
              </Text>
              <Text style={styles.subHeading}>
                {h.item.accepted ? "Donation Accepted" : "Not Accepted"}
              </Text>
              <Text style={styles.subHeading}>
                Donated On: {h.item.donatedOn.substring(0, 10)}
              </Text>
            </View>
          );
        }}
      ></FlatList>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  box: {
    borderWidth: 0.5,
    borderRadius: 5,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    justifyContent: "space-evenly",
    height: 180,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  midHeading: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 8,
  },
  subHeading: {
    fontSize: 14,
    marginVertical: 4,
  },
});
