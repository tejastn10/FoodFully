import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  RefreshControl,
  StyleSheet,
} from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import Center from "../components/Center";
import PrimaryBtn from "../components/PrimaryBtn";
import { View, Text } from "../components/Themed";
import { DonationState, OrderState } from "../store/@types";
import {
  clearOrder,
  orderRequest,
  recentDonationRequest,
} from "../store/actions/actions";
import { ApplicationState } from "../store/store";

const Ngo = () => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const donationState = useSelector<ApplicationState, DonationState>(
    (state) => state.donation
  );
  const orderState = useSelector<ApplicationState, OrderState>(
    (state) => state.order
  );

  const { isLoading, donations, errors } = donationState;
  const { order, errors: oErrors } = orderState;

  useEffect(() => {
    if (donations === null) {
      dispatch(recentDonationRequest());
    }
    setRefreshing(false);
  }, [dispatch, donations]);

  useEffect(() => {
    if (errors.results) {
      Alert.alert("Error", errors.results?.message);
    }
  }, [errors.results]);

  useEffect(() => {
    if (oErrors.results) {
      Alert.alert("Error", oErrors.results?.message);
    }
  }, [dispatch, oErrors.results]);

  useEffect(() => {
    if (order) {
      Alert.alert(
        "Success",
        `You have accepted the donation please contact the Hotel`
      );
      setTimeout(() => {
        dispatch(clearOrder());
      }, 5000);
    }
  }, [dispatch, order]);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(recentDonationRequest());
  };

  const acceptOrder = (donationId: string) => {
    dispatch(orderRequest(donationId));
    setTimeout(() => {
      dispatch(recentDonationRequest());
    }, 4000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Center>
        <View>
          <Text style={styles.heading}>Recent Donations</Text>
        </View>
        {isLoading ? (
          <ActivityIndicator size={40} color="#2f95dc" />
        ) : donations === null || donations?.length === 0 ? (
          <Text>No Recent Donations</Text>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(u) => u._id}
            data={donations}
            renderItem={(d) => {
              return (
                <View
                  style={[
                    styles.box,
                    { borderColor: `${d.item.isUrgent ? "red" : "#2f95dc"}` },
                  ]}
                >
                  <Text style={{ fontSize: 28, fontWeight: "bold" }}>
                    {d.item.hotel.name}
                  </Text>
                  <Text style={{ fontSize: 18 }}>{d.item.quantity}</Text>
                  <Text style={{ fontSize: 18 }}>{d.item.description}</Text>
                  <Text style={{ fontSize: 20 }}>{d.item.bestBefore}</Text>
                  <PrimaryBtn
                    title="Accept Donation"
                    onPress={() => acceptOrder(d.item._id)}
                  />
                </View>
              );
            }}
          />
        )}
      </Center>
    </ScrollView>
  );
};

export default Ngo;

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  box: {
    marginBottom: 15,
    padding: 20,
    justifyContent: "space-evenly",
    height: 280,
    width: 310,
    borderWidth: 1.5,
    borderRadius: 5,
  },
});
