import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";

const LocationScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const setup = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission Denied");
      return;
    }

    try {
      let location = await Location.getCurrentPositionAsync();
      setLocation(location);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setup();
  }, []);

  let text = "Waiting...";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    console.log(location)
    let latitude = location.coords.latitude;
    let longitude = location.coords.longitude;
    text = `latitude: ${latitude}\nlongitude: ${longitude}`;
  }

  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({});
