import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function CustomTextInp({placeholder}) {
  return (
    <View>
        <TextInput 
        style={styles.textInp}  
        placeholder={placeholder}
        />
    </View>
  )
}
const styles = StyleSheet.create({
    textInp:{
        height:45,
        fontSize:20,
        borderWidth:2,
        borderRadius:8,
        marginVertical:10,
        marginHorizontal:20,
        borderColor:'#ededed',
        backgroundColor:'#FFFFFF'
    }
})