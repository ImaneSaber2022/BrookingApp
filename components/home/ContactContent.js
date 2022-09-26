import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const ContactContent = ({item, index}) => {
  return (
    <>
      <View style={{marginTop: 15}}>
        <Text style={{color: 'gray'}}>{item.name}</Text>
      </View>
      <View style={styles.body}>
        <View style={{flexDirection: 'row'}}>
          {item.icon}
          {item.text}
        </View>
      </View>
    </>
  );
};

export default ContactContent;

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: '#eceeff',
    borderColor: '#eceeff',
    marginTop: 12,
  },
});
