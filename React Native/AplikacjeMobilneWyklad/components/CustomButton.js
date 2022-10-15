import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const CustomButton = ({
  text,
  onPress,
  maxWidth = "80%",
  mainColor,
  subColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          maxWidth: maxWidth,
          backgroundColor: mainColor,
          borderWidth: 2,
          borderColor: subColor,
        },
      ]}
    >
      <Text style={[styles.text, { color: subColor }]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: 200,
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});
