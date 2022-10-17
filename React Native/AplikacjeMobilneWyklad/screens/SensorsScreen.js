import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import COLORS from "../colors";

const SensorsScreen = ({ navigation }) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}
    >
      <Text style={styles.text}> Wszystkie Dostępne Sensory</Text>
      <CustomButton
        text="Akcelerometr"
        onPress={() => {
          navigation.navigate("AccelerometerScreen", { navigation });
        }}
        mainColor={COLORS.pink}
        subColor="#fff"
      />
      <CustomButton
        text="Żyroskop"
        onPress={() => {
          navigation.navigate("GyroscopeScreen", { navigation });
        }}
        mainColor="#fff"
        subColor={COLORS.pink}
      />
      <CustomButton
        text="Magnetometr"
        onPress={() => {
          navigation.navigate("MagnetometerScreen", { navigation });
        }}
        mainColor={COLORS.pink}
        subColor="#fff"
      />
      <CustomButton
        text="Krokomierz"
        onPress={() => {
          navigation.navigate("PedometerScreen", { navigation });
        }}
        mainColor="#fff"
        subColor={COLORS.pink}
      />
    </ScrollView>
  );
};

export default SensorsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
  },
  text: {
    color: COLORS.pink,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 50,
  },
});
