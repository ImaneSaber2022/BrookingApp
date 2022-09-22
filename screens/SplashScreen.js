import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import image3 from '../assestes/images/image3.png'
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
    const Navigation = useNavigation();
   
      setTimeout(()=>{
          Navigation.navigate('Page1')
      },3000)
  
  return (
    <View
      style={styles.container}>
      <Image source={image3} style={styles.img} />
      <Text style={styles.textstyle}>
        Event Booking
      </Text>
      <Text style={styles.text}>
        Mobile App UI Kit
      </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#000000',
  },
  img:{
    width: 50, height: 50
  },textstyle:{
    fontSize: 45, fontWeight: 'bold', color: '#fff'
  },
  text:{
    fontSize: 20, fontWeight: 'normal', color: 'gray'
  }
});
