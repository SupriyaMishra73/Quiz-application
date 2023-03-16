import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import Home from './screens/Home'
import Result from './screens/Result'
import Quiz from './screens/Quiz'
import MyStack from './navigation';

const App = () => {
  return (
  
     
      <NavigationContainer>
        <MyStack/>

      </NavigationContainer>
      
      

  )
}

export default App

const styles = StyleSheet.create({
  container:{
    padding:20,
    paddingHorizontal:16,

  }
})