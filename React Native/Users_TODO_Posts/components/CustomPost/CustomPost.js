import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const CustomPost = ({title, body, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
    </Pressable>
  )
}

export default CustomPost

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        textAlign: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    body:{

    }

})