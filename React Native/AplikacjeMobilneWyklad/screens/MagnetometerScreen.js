import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Magnetometer } from "expo-sensors";
import COLORS from "../colors";

export default function Compass() {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);

  const _slow = () => {
    Magnetometer.setUpdateInterval(1000);
  };

  const _fast = () => {
    Magnetometer.setUpdateInterval(200);
  };

  const _subscribe = () => {
    setSubscription(
      Magnetometer.addListener((result) => {
        setData(result);
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  const { x, y, z } = data;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Magnetometr</Text>
      <Text style={styles.result}>
        X:{" "}
        <Text style={{ color: COLORS.pink, fontWeight: "bold" }}>
          {data.x.toFixed(2)}
        </Text>{" "}
      </Text>
      <Text style={styles.result}>
        Y:{" "}
        <Text style={{ color: COLORS.pink, fontWeight: "bold" }}>
          {data.y.toFixed(2)}
        </Text>{" "}
      </Text>
      <Text style={styles.result}>
        Z:{" "}
        <Text style={{ color: COLORS.pink, fontWeight: "bold" }}>
          {data.z.toFixed(2)}
        </Text>{" "}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    borderWidth: 1,
    alignItems: "center",
  },
  title: {
    color: COLORS.pink,
    fontSize: 24,
    marginBottom: 20,
  },
  result: {
    marginTop: 10,
  },
});
