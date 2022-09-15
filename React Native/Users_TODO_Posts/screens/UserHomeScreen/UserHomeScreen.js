import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const UserHomeScreen = ({
  navigation,
  route: {
    params: { user },
  },
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.username}>{user.username}</Text>
      <View style={styles.button}>
        <Button
          onPress={() => {
            navigation.navigate("TodosScreen", { navigation, user });
          }}
          title="TODOS"
        />
      </View>
      <Button
        style={styles.button}
        onPress={() => {
          navigation.navigate("PostsScreen", { navigation, user });
        }}
        title="POSTS"
      />
    </View>
  );
};

export default UserHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  username: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  button: {
    marginVertical: 10,
    height: 50,
  }
});
