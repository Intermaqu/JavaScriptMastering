import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Gyroscope } from "expo-sensors";
import COLORS from "../colors";

const GyroscopeScreen = () => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);

  const _slow = () => {
    Gyroscope.setUpdateInterval(1000);
  };

  const _fast = () => {
    Gyroscope.setUpdateInterval(100);
  };

  const _subscribe = () => {
    setSubscription(
      Gyroscope.addListener((barData) => {
        setData(barData);
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  // const isAvailable = async () => {
  //   const dat = await Gyroscope.isAvailableAsync();
  //   console.log(dat);
  // };

  useEffect(() => {
    // isAvailable();
    _fast();
    _subscribe();
    return () => {
      _unsubscribe();
    };
  }, []);

  const { x, y, z } = data;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Żyroskop</Text>
      <Text style={styles.result}>
        X:{" "}
        <Text style={{ color: COLORS.pink, fontWeight: "bold" }}>
          {data.x.toFixed(3)}
        </Text>{" "}
      </Text>
      <Text style={styles.result}>
        Y:{" "}
        <Text style={{ color: COLORS.pink, fontWeight: "bold" }}>
          {data.y.toFixed(3)}
        </Text>{" "}
      </Text>
      <Text style={styles.result}>
        Z:{" "}
        <Text style={{ color: COLORS.pink, fontWeight: "bold" }}>
          {data.z.toFixed(3)}
        </Text>{" "}
      </Text>
    </View>
  );
};

export default GyroscopeScreen;

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
