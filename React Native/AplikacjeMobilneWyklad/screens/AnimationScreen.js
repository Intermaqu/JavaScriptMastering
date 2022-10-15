import { StackActions } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import COLORS from "../colors";

const AnimationScreen = ({ navigation }) => {
  const vertical = useRef(new Animated.Value(0)).current;
  const horizontal = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const [animationOver, setAnimationOver] = useState(false);

  useEffect(() => {
    Animated.sequence([
      Animated.timing(vertical, { toValue: 100, useNativeDriver: false }),
      Animated.timing(horizontal, { toValue: 100, useNativeDriver: false }),
      Animated.timing(vertical, { toValue: 0, useNativeDriver: false }),
      Animated.timing(horizontal, { toValue: 0, useNativeDriver: false }),
      Animated.parallel([
        Animated.timing(vertical, { toValue: 50, useNativeDriver: false }),
        Animated.timing(horizontal, { toValue: 50, useNativeDriver: false }),
      ]),
      Animated.timing(scale, { toValue: 2 }),
      Animated.delay(500),
      Animated.timing(scale, { toValue: 0 }),
    ]).start();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace("AuthenticationScreen"));
    }, 4300);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.animatedContainer}>
        <Animated.View
          style={[
            styles.square,
            {
              top: vertical,
              left: horizontal,
              justifyContent: "center",
              alignItems: "center",
              transform: [{ scale: scale }],
            },
          ]}
        >
          <Text style={{ color: "#fff" }}>ŁADOWANIE</Text>
        </Animated.View>
      </View>
    </View>
  );
};

export default AnimationScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  animatedContainer: {
    width: 200,
    height: 200,
    position: "relative",
  },
  square: {
    width: 100,
    height: 100,
    borderRadius: 5,
    backgroundColor: COLORS.pink,
    position: "absolute",
  },
});
