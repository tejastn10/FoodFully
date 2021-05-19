import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Center from "../components/Center";
import FormInput from "../components/FormInput";
import PrimaryBtn from "../components/PrimaryBtn";
import { View, Text } from "../components/Themed";
import { height } from "../constants/Layout";
import { DonationState } from "../store/@types";
import { clearDonation, donationRequest } from "../store/actions/actions";
import { ApplicationState } from "../store/store";
import messaging from "@react-native-firebase/messaging";

const Hotel = () => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState("");
  const [bestBefore, setBestBefore] = useState("");
  const [description, setDescription] = useState("");

  const donationState = useSelector<ApplicationState, DonationState>(
    (state) => state.donation
  );

  const { donation, errors } = donationState;

  useEffect(() => {
    if (donation) {
      Alert.alert(
        "Success",
        `Your donation has been successfully made with id ${donation._id}. Please wait, Hotel will get back to you`
      );
      setTimeout(() => {
        dispatch(clearDonation());
      }, 5000);
    }
  }, [dispatch, donation]);

  useEffect(() => {
    if (errors.results) {
      Alert.alert("Error", errors.results?.message);
    }
  }, [errors.results]);

  const submitHandler = async (rapid?: boolean) => {
    const fcmToken = await messaging().getToken();
    console.log(fcmToken);
    if (fcmToken !== null || fcmToken !== "") {
      if (quantity && bestBefore && description) {
        if (rapid) {
          dispatch(
            donationRequest({
              isUrgent: rapid,
              quantity,
              description,
              bestBefore,
              fcmToken,
            })
          );
        } else {
          dispatch(
            donationRequest({
              isUrgent: false,
              quantity,
              description,
              bestBefore,
              fcmToken,
            })
          );
        }
      } else {
        Alert.alert("Error", "Please enter All Values");
      }
    }
  };

  return (
    <Center>
      <View>
        <Text style={styles.heading}>Add a Donation</Text>
        <FormInput
          placeholderText="Quantity"
          onChange={(val: string) => setQuantity(val)}
        />

        <FormInput
          placeholderText="Best Before"
          onChange={(val: string) => setBestBefore(val)}
        />

        <FormInput
          placeholderText="Description"
          onChange={(val: string) => setDescription(val)}
          multiline={true}
        />
        <View>
          <PrimaryBtn onPress={() => submitHandler()} title="Notify" />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => submitHandler(true)}
            style={styles.rapid}
          >
            <Text style={styles.text}>Rapid Notify</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Center>
  );
};

export default Hotel;

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  rapid: {
    marginTop: 10,
    width: "100%",
    height: height / 15,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#ff0000",
    borderWidth: 0.25,
    borderRadius: 3,
    backgroundColor: "#ff0000",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
