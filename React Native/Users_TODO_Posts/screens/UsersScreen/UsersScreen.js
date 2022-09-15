import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { LogBox } from "react-native";
import React, { useState, useEffect } from "react";
import CustomUser from "../../components/CustomUser/CustomUser";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

const UsersScreen = ({ navigation }) => {
  const [users, setUsers] = useState();
  const [posts, setPosts] = useState();
  const [todos, setTodos] = useState();
  const [numberOfPosts, setNumberOfPosts] = useState() 
  const [numberOfTodos, setNumberOfTodos] = useState() 

  const URL = "https://jsonplaceholder.typicode.com/";

  const fetchData = async (entity, setter) => {
    const res = await fetch(`${URL}${entity}`);
    const json = await res.json();
    setter(json);
  };

  const fetchAllData = async () => {
    await fetchData("users", setUsers);
    await fetchData("posts", setPosts);
    await fetchData("todos", setTodos);
  };

  const onPressHandle = (user) => {
    navigation.navigate("UserHomeScreen", { navigation: navigation, user: user });
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  // REDUCE ALL POSTS TO OBJ {userId: numberOfPosts}

  useEffect(() => {
    if (posts) {
      const numberOfPosts = posts.reduce((acc, curr) => {
        const currCount = acc[curr.userId] ?? 0;
        return {
          ...acc,
          [curr.userId]: currCount + 1,
        };
      }, {});
      setNumberOfPosts(numberOfPosts)
    }
  }, [posts]);

  // REDUCE ALL TODOS TO OBJ {userId: numberOfTodos}

  useEffect(() => {
    if (todos) {
      const numberOfTodos = todos.reduce((acc, curr) => {
        const currCount = acc[curr.userId] ?? 0;
        return {
          ...acc,
          [curr.userId]: currCount + 1,
        };
      }, {});
      setNumberOfTodos(numberOfTodos)
    }
  }, [todos]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={{fontSize: 20, textAlign:"center", fontWeight: "bold"}}>USERS</Text>
        {users &&
          users.map((user) => {
            return (
              <CustomUser
                username={user.username}
                name={user.name}
                onPress={() => onPressHandle(user)}
                email={user.email}
                key={user.id}
                numberOfPosts = {numberOfPosts && numberOfPosts[user.id]}
                numberOfTodos = {numberOfTodos && numberOfTodos[user.id]}
              />
            );
          })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default UsersScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
});
