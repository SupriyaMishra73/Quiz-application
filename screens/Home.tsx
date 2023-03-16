import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Title from '../components/Title'
import Quiz from './Quiz'


const Home = ({navigation}) => {
  return (
   <View style={styles.container}>
      <Title titleText='QUIZZLER'  />
  <View style={styles.bannerContainer}>
    {/* <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJBT4jRqFx0KnBl0wHbFLCx-7LkUCuGazBw&usqp=CAU'}} */}
    <Image source={{uri: 'data:image/jpeg;base64,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'}}
    style={styles.banner}
    resizeMode="contain"/>

  </View>
  <TouchableOpacity onPress={()=>navigation.navigate("Quiz")} style={styles.button}>
    <Text style={styles.buttonText}>Start</Text>

  </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  banner: {
    height: 500,
    width: 350,
    borderRadius:9,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,

    
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
    backgroundColor:'#FDFA66',
  },
  button: {
    width: '100%',
    // backgroundColor: '#1A759F',
    backgroundColor: '#E74645',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
});