import { StyleSheet, Text, View } from "react-native";
import { Accelerometer } from "expo-sensors";
import { useState, useEffect } from "react";
import React from "react";

const AccelerometerScreen = () => {
  const [data, setData] = useState({});
  const [sub, setSub] = useState(null);

  const normal = () => {
    Accelerometer.setUpdateInterval(200);
  };

  const _sub = () => {
    setSub(
      Accelerometer.addListener((data) => {
        setData(data);
      })
    );
  };

  const _unsub = () => {
    sub && sub.remove();
    setSub(null);
  };

  const { x, y, z } = data;

  useEffect(() => {
    _sub();
    normal();
    return () => _unsub();
  }, []);

  return (
    <View>
      <Text>ACCELEROMETER</Text>
      {x && <Text>x: {round(x)}</Text>}
      {y && <Text>y: {round(y)}</Text>}
      {z && <Text>z: {round(z)}</Text>}
    </View>
  );
};

export default AccelerometerScreen;

const styles = StyleSheet.create({});

const round = (num) => {
  return num.toFixed(2);
};
