import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Lets Quiz </Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
  title:{
    fontSize:46,
    fontWeight:'bold',
    color:'black',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 10
    // fontStyle:'sans-serif',
    
  },
  container:{
    paddingVertical:16,
    justifyContent:'center',
    alignItems:'center',
    

  }
})