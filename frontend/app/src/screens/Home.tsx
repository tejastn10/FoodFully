import React, { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import Hotel from "./Hotel";
import Ngo from "./Ngo";
import messaging from "@react-native-firebase/messaging";
import { addToken } from "../services/api";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/api-helper";

messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log("Message handled in the background!", remoteMessage);
});

const Home = () => {
  const { user } = useAuth();

  const sendFcmToken = async () => {
    const fcm = await getFromLocalStorage("fcm");
    if (fcm === null) {
      try {
        await messaging().registerDeviceForRemoteMessages();
        const token = await messaging().getToken();
        await addToken(token);
        saveToLocalStorage("fcm", token);
      } catch (err) {
        //Do nothing
        console.log(err.response.data);
        return;
      }
    }
  };

  useEffect(() => {
    sendFcmToken();
  }, []);

  return user?.isNgo ? <Ngo /> : <Hotel />;
};

export default Home;
