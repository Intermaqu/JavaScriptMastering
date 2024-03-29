import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const CustomButton = ({ text, onPress, maxWidth = "40%" }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { maxWidth: maxWidth }]}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: 200,
    padding: 10,
    backgroundColor: "#B266FF",
    borderRadius: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});
