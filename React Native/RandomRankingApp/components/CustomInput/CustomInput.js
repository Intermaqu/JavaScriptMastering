import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({placeholder, value, setValue, secureTextEntry}) => {
  return (
    <View style={styles.container}>
        <TextInput
            placeholder={placeholder}
            style={styles.input}
            value={value}
            onChangeText={setValue}
            secureTextEntry = {secureTextEntry}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        marginVertical: 5
    },
    input:{

    }
})

export default CustomInput