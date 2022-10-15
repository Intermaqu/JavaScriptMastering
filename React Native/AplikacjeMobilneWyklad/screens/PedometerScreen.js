import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Pedometer } from "expo-sensors";
import COLORS from "../colors";

const PedometerScreen = () => {
  const [data, setData] = useState(0);
  const [subscription, setSubscription] = useState(null);

  const _slow = () => {
    Pedometer.setUpdateInterval(1000);
  };

  const _fast = () => {
    Pedometer.setUpdateInterval(100);
  };

  const _subscribe = async () => {
    setSubscription(Pedometer.watchStepCount((data) => setData(data.steps)));
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Ilość kroków to:{" "}
        <Text style={{ color: COLORS.pink, fontWeight: "bold" }}>{data}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    borderWidth: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});

export default PedometerScreen;
