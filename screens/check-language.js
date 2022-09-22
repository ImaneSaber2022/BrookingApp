import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const CheckLanguage = ({d, show, onClick}) => {
  return (
    <View style={styles.container}>
      {!show ? (
        <TouchableOpacity onPress={onClick} style={styles.header}>
          <View>
            <Image source={d.imgurl} style={styles.img} />
          </View>
          <View style={styles.text}>
            <Text>{d.name}</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onClick} style={styles.body}>
          <View>
            <Image source={d.imgurl} style={styles.image} />
          </View>
          <View style={styles.footer}>
            <Text>{d.name}</Text>
            <View>
              <Text>{d.ico}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CheckLanguage;

const styles = StyleSheet.create({
  container: {padding: 10},
  header: {
    height: 50,
    borderRadius: 15,
    flexDirection: 'row',
    padding: 5,
  },
  image: {
    width: 50,
    height: 40,
    borderRadius: 10,
    marginRight: 10,
  },
  body: {
    backgroundColor: 'white',
    height: 50,
    borderRadius: 15,
    flexDirection: 'row',
    padding: 5,
  },
  footer: {
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    alignSelf: 'center',

    flex: 1,
  },
  img: {
    width: 50,
    height: 40,
    borderRadius: 10,
    marginRight: 10,
  },
});
