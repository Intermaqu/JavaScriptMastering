import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import RouteIcon from "./RouteIcon";

const marginVertical = 10;
const marginHorizontal = 10;
const cols = 2;
const width =
  Dimensions.get("window").width / cols - marginHorizontal * (cols - 1);

const CustomSmallView = ({
  name,
  path,
  navigation,
  description,
  distance,
  id,
}) => {
  return (
    <View style={styles.gridItem} key={id}>
      <RouteIcon
        name={name}
        path={path}
        navigation={navigation}
        description={description}
        distance={distance}
        id={id}
      />
    </View>
  );
};

export default CustomSmallView;

const styles = StyleSheet.create({
  gridItem: {
    marginVertical: marginVertical,
    marginHorizontal: marginHorizontal,
    width: width - 10,
    height: 200,
  },
});
