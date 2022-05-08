import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
// import SignIn from './src/screen/SignInScreen' 
import Routes from './src/routes'
const App = () => {
  return (
    <SafeAreaView style={styles.root}>
    <Routes />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  root:{
    flex:1,
    backgroundColor:'#dfedf5'
  }
})