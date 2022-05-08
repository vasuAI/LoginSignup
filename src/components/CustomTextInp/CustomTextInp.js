import { View, Text, Image, StyleSheet } from 'react-native'
import { TextInput, } from 'react-native-paper'

import React from 'react'
import SignInScreen from '../../screen/SignInScreen/SignInScreen'

export default function CustomTextInp({placeholder, inp, setInp}) {

  return (
    <View>
        <TextInput
        mode='outlined'
        label={placeholder}
        style={styles.textInp}  
        onChangeText={text=>setInp({email:text, password:text})}
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
        borderColor : '#ededed',
        backgroundColor :'#FFFFFF'
    }
})