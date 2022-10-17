import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import AccelerometerScreen from "./screens/AccelerometerScreen";
import LightSensorScreen from "./screens/LightSensorScreen";
import LocationScreen from "./screens/LocationScreen";

export default function App() {
  
  return (
    <View style={styles.container}>
      {/* <AccelerometerScreen/> */}
      {/* <LocationScreen/> */}
      <LightSensorScreen/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
