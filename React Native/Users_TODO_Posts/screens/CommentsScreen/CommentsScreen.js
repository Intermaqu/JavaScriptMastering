import { StyleSheet, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CustomComment from "../../components/CustomComment/CustomComment";

const CommentsScreen = ({
  navigation,
  route: {
    params: { post },
  },
}) => {
  const [comments, setComments] = useState();

  const URL = "https://jsonplaceholder.typicode.com/";

  const fetchData = async (entity, setter) => {
    if (post)
      try {
        const res = await fetch(`${URL}${entity}`);
        const json = await res.json();
        const data = json.filter((comment) => comment.postId === post.id);
        setter(data);
      } catch (e) {
        console.log(e);
      }
  };

  useEffect(() => {
    fetchData("comments", setComments);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={{fontSize: 16, marginHorizontal: 20}}>Post: {post.title}</Text>
        {comments &&
          comments.map((comment) => (
            <CustomComment
              name={comment.name}
              body={comment.body}
              email={comment.email}
              key={comment.id}
            />
          ))}
    </ScrollView>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  container:{
  }
});
