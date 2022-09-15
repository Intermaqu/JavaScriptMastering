import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import CustomTodo from "../../components/CustomTodo";

const TodosScreen = ({
  navigation,
  route: {
    params: { user },
  },
}) => {
  const [todos, setTodos] = useState();

  const URL = "https://jsonplaceholder.typicode.com/";

  const fetchData = async (entity, setter) => {
    if (user)
      try {
        const res = await fetch(`${URL}${entity}`);
        const json = await res.json();
        const data = json.filter((todo) => todo.userId === user.id);
        setter(data);
      } catch (e) {
        console.log(e);
      }
  };

  useEffect(() => {
    fetchData("todos", setTodos);
  }, []);

  return (
    <ScrollView>
        {
            todos && todos.map(todo=>(
                <CustomTodo
                    title = {todo.title}
                    completed = {todo.completed}
                    key={todo.id}
                />
                ))
        }
    </ScrollView>
  );
};

export default TodosScreen;

const styles = StyleSheet.create({});
