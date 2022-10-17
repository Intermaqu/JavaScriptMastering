import React from "react";
import { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Animated, ToastAndroid } from "react-native";

const AnimatedWelcome = ({ navigation }) => {
  const ref1 = useRef(new Animated.Value(0)).current;
  const ref2 = useRef(new Animated.Value(0)).current;
  const ref3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.spring(ref1, {toValue: 1,useNativeDriver: true,}),
      Animated.delay(600),
      Animated.spring(ref1, {toValue: 0,useNativeDriver: true,}),
      Animated.spring(ref2, {toValue: 1,useNativeDriver: true,}),
      Animated.delay(600),
      Animated.spring(ref2, {toValue: 0,useNativeDriver: true,}),
      Animated.spring(ref3, {toValue: 1,useNativeDriver: true,}),
      Animated.delay(600),
      Animated.spring(ref3, {toValue: 0,useNativeDriver: true,}),
    ]).start();
    setTimeout(() => {
      navigation.navigate("HomeScreen", { navigation });
    }, 6500);
  }, []);
  return (
    <View style={styles.container}>
      <Animated.Text
        style={{
          color: "#B266FF",
          fontWeight: "bold",
          fontSize: 10,
          transform: [
            {
              scale: ref1.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 6],
              }),
            },
          ],
          opacity: ref1.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
        }}
      >
        Welcome In
      </Animated.Text>
      <Animated.Text
        style={{
          color: "#B266FF",
          fontWeight: "bold",
          fontSize: 10,
          transform: [
            {
              scale: ref2.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 6],
              }),
            },
          ],
          opacity: ref2.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
        }}
      >
        Jogging {"\n"}Training
      </Animated.Text>
      <Animated.Text
        style={{
          color: "#B266FF",
          fontWeight: "bold",
          fontSize: 10,
          transform: [
            {
              scale: ref3.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 6],
              }),
            },
          ],
          opacity: ref3.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
        }}
      >
        Tracking {"\n    "} App
      </Animated.Text>
    </View>
  );
};

export default AnimatedWelcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  square: {},
});
