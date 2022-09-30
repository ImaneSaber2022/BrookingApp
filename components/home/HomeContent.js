import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';


const HomeContent = ({dtt, index}) => {
 
  return (
    <TouchableOpacity 
    key={index} style={styles.buttontexte}>
      <View style={styles.styleButton}>
        <Text style={styles.styleTexte}>{dtt.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeContent;

const styles = StyleSheet.create({
  buttontexte: {
    backgroundColor: '#f7f7f7',
    width: 100,
    height: 40,
    borderRadius: 10,
    marginTop: 15,
    justifyContent: 'space-between',
    marginRight: 5,
    marginLeft: 5,
    padding: 10,
  },
  buttontext: {
    backgroundColor: '#5766c7',
    width: 100,
    height: 40,
    borderRadius: 10,
    marginTop: 15,
    marginLeft: 10,
  },
  styleTexte: {
    color: '#000',
  },
  styleButton: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  styleText: {
    color: '#fff',
  },
  buttontexte: {
    backgroundColor: '#f7f7f7',
    width: 100,
    height: 40,
    borderRadius: 10,
    marginTop: 15,
    justifyContent: 'space-between',
    marginRight: 5,
    marginLeft: 5,
    padding: 10,
  },
});
