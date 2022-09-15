import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import CustomPost from "../../components/CustomPost";

const PostsScreen = ({
  navigation,
  route: {
    params: { user },
  },
}) => {
  const [posts, setPosts] = useState();

  const URL = "https://jsonplaceholder.typicode.com/";

  const fetchData = async (entity, setter) => {
    if (user)
      try {
        const res = await fetch(`${URL}${entity}`);
        const json = await res.json();
        const data = json.filter((post) => post.userId === user.id);
        setter(data);
      } catch (e) {
        console.log(e);
      }
  };

  const onPressHandle = (post) => {
    navigation.navigate("CommentsScreen", {navigation: navigation, post: post})
  } 

  useEffect(() => {
    fetchData("posts", setPosts);
  }, []);

  return (
    <ScrollView>
      {posts &&
        posts.map((post) => <CustomPost title={post.title} body={post.body} key={post.id} onPress={()=>onPressHandle(post)}/>)}
    </ScrollView>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({});
