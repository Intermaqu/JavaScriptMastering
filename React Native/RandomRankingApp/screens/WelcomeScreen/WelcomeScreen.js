import { StyleSheet, Text, View } from "react-native";
import React from "react";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>WELCOME IN</Text>
      <Text style={styles.textRed}>GUESS GAME</Text>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
  },
  textRed: {
    fontSize: 40,
    color: "red",
  },
});
