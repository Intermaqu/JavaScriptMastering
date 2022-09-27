import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import malta from "../images/malta.jpg";
import cytadela from "../images/cytadela.jpg";
import rusalka from "../images/rusalka.jpg";
import wartostrada from "../images/wartostrada.jpg";
import zoo from "../images/zoo.jpg";

const RouteIcon = ({ name, path, navigation, distance, description }) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        navigation.navigate("InspectRouteScreen", {
          navigation,
          name,
          path,
          distance,
          description,
        });
      }}
    >
      <Image source={path} style={styles.image} />
      <Text style={styles.text}>{name}</Text>
    </Pressable>
  );
};

export default RouteIcon;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: null,
    aspectRatio: 1,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
