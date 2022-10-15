import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Accelerometer } from "expo-sensors";
import COLORS from "../colors";

const AccelerometerScreen = () => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);

  const _slow = () => {
    Accelerometer.setUpdateInterval(1000);
  };

  const _fast = () => {
    Accelerometer.setUpdateInterval(100);
  };

  const _subscribe = () => {
    setSubscription(
      Accelerometer.addListener((accData) => {
        setData(accData);
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _slow();
    _subscribe();
    return () => {
      _unsubscribe();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Akcelerometr</Text>
      <Text> Wyniki Akcelerometru w G gdzie 1G = 9.81 * m * s²</Text>
      <Text style={styles.result}>
        X:{" "}
        <Text style={{ color: COLORS.pink, fontWeight: "bold" }}>
          {data.x.toFixed(3)}
        </Text>{" "}
        G
      </Text>
      <Text style={styles.result}>
        Y:{" "}
        <Text style={{ color: COLORS.pink, fontWeight: "bold" }}>
          {data.y.toFixed(3)}
        </Text>{" "}
        G
      </Text>
      <Text style={styles.result}>
        Z:{" "}
        <Text style={{ color: COLORS.pink, fontWeight: "bold" }}>
          {data.z.toFixed(3)}
        </Text>{" "}
        G
      </Text>
    </View>
  );
};

export default AccelerometerScreen;

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
