import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const CustomUser = ({
  username,
  name,
  email,
  numberOfPosts,
  numberOfTodos,
  onPress,
}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.username}>{username}</Text>
      <Text style={styles.email}>{email}</Text>
      <Text style={styles.posts}>
        Number of posts:{" "}
        <Text style={{ fontWeight: "bold" }}>{numberOfPosts}</Text>
      </Text>
      <Text style={styles.todos}>
        Number of todos:{" "}
        <Text style={{ fontWeight: "bold" }}>{numberOfTodos}</Text>
      </Text>
    </Pressable>
  );
};

export default CustomUser;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    padding: 10,
    marginVertical: 10,
  },
  username: {
    fontSize: 25,
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
  },
  posts: {
    fontSize: 14,
  },
  todos: {
    fontSize: 14,
  },
});
