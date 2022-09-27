import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const InspectRouteScreen = ({
  navigation,
  route: {
    params: { name, path, description, distance },
  },
}) => {
  return (
    <ScrollView
      className={styles.container}
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Image source={path} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.distance}>Długość Trasy: {distance} Km</Text>
      <Text style={styles.description}>{description}</Text>
    </ScrollView>
  );
};

export default InspectRouteScreen;

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    padding: 20,
  },
  image: { width: "100%", height: null, aspectRatio: 1, marginVertical: 20 },
  name: { marginVertical: 20, fontSize: 24, fontWeight: "bold" },
  distance: { marginVertical: 20, fontSize: 16 },
  description: {
    marginHorizontal: 20,
  },
});
